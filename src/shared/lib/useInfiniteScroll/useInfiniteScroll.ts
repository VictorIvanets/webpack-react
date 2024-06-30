import { MutableRefObject, useEffect } from "react"


export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export function UseInfiniteScroll ({callback, wrapperRef, triggerRef}: UseInfiniteScrollOptions){


    useEffect(()=>{

        const wrapperElement = wrapperRef.current
        const trggerElement = triggerRef.current
    
        let observer: IntersectionObserver | null = null
        if(callback) {
        const options = {
            root: wrapperElement,
            rootMargin: '0px',
            threshold: 1.0
        }

        observer = new IntersectionObserver(([entry])=>{

            if(entry.isIntersecting) {
                callback()
            }
        }, options)

        observer.observe(trggerElement)
        }
        return ()=>{
            if (observer && wrapperElement) {
                // debugger
                observer.unobserve(wrapperElement)
            }
        }
    }, [triggerRef, wrapperRef, callback])
}