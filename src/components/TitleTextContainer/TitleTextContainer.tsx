import styles from './TitleTextContainer.module.scss'
interface TitleTextType{
    title:string | undefined,
    text:string | undefined,
    highlited:string | undefined
}
export const TitleTextContainer=({title,text,highlited}:TitleTextType)=>{
    return(
        <>
         <h1 className={styles.title}>{title}</h1>
         {text!=undefined && highlited!=undefined?<p className={styles.text}>{text} <span className={styles.highlite}>{highlited}</span></p>:<p></p>}
         
        </>
    )

}