import styles from './TitleTextContainer.module.scss'
interface TitleTextType{
    title:string,
    text:string | null,
    highlited:string | null
}
export const TitleTextContainer=({title,text,highlited}:TitleTextType)=>{
    return(
        <>
         <h1 className={styles.title}>{title}</h1>
         {text!=null && highlited!=null?<p className={styles.text}>{text} <span className={styles.highlite}>{highlited}</span></p>:<p></p>}
         
        </>
    )

}