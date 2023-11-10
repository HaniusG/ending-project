import React from 'react'
import styles from './TemplatePreviews.module.css'
import { TemplatePreviewProps } from './TemplatePreviw.interface';

 const TemplatePreviews:React.FC<TemplatePreviewProps> = ({backgroundColor, text, isTemplate}) => {
  return (
    <div style={{backgroundColor}} className={styles.templatePreview}>
    {isTemplate ? <button>Template</button>: null}
    <h4>{text}</h4>
  </div>
  )
}

export default TemplatePreviews;