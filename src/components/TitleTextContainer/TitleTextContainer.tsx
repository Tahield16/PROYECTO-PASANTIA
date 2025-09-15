interface TitleTextType{
    title:string,
    text:string,
    highlited:string
}
const TitleTextContainer=({title,text,highlited}:TitleTextType)=>{
    return(
        <>
         <h1 className="">{title}</h1>
        </>
    )

}