// 防抖
export function debounce(fn, wait) {
    let time = null;
    return (e) =>{
        if(time !== null) {
            clearTimeout(time)
        }
        time = setTimeout(()=> fn(e), wait);
    }
}