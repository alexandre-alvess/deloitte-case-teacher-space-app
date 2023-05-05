import React, { useEffect, useRef } from "react";

export default function UIInfiniteScroll( { fecthMore } ) {

const containerRef = useRef();

    useEffect(() => {
        const options = {
          root: null, 
          rootMargin: '0px',
          theshold: 1.0  
        };

        const observer = new IntersectionObserver(([entry]) => {
            
            /* ao interceptar o elemento na tela realizar o fecthMore() */
            if (entry.isIntersecting) {
                
                console.log('final da pagina')

                /* desconecta o observer para garantir que o fecthMore
                   será executado uma única vez */
                observer.disconnect(); 

                fecthMore();
            }
        }, options);


        observer.observe(containerRef.current);

        /* desmonta o componente, cancelando o listener do 
           observer para evitar vazamento de memória */
        return () => {
            observer.disconnect();
        };

    }, []);

    return <div ref={containerRef} />;
}