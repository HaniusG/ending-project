import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { clickChange, commentChange } from 'entites/comments/commentsSlice';
import styles from './Modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'entites/store'

interface ModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {

  const isClicked = useSelector((state: RootState)=>{
    return state.comments.isClicked
  })
  console.log(isClicked);
  

  const dispatch = useDispatch();


  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node) ) {
      dispatch(clickChange(false))
    }
  }


  useEffect(() => {
    if(isClicked){
      document.addEventListener('mousedown', closeModal);

    }else{
      document.removeEventListener('mousedown', closeModal);
    
    }
    

    return () => {
      document.removeEventListener('mousedown', closeModal);

    }
  }, [isClicked])

  

  return (
    <>
      {
        isClicked && <div>
            <div ref={modalRef} className={styles.modal}>{children}</div>
          </div>
      }
    </>
  )
}

export default Modal