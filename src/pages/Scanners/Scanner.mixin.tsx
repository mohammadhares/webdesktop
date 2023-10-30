export const displayStatus = (status : string , isSuccess : boolean) => {
    if(isSuccess){
        return status === 'Online' ? <>&#128994; </> : <>&#128308;</>;
    }
}