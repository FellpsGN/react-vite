/* Criando propriedades para a function tweet
Está recebendo um texto do tipo string */

type TweetProps = {
    text?: string; /* Ao utilizar a "?" significa que aquela propriedade é opcional */
}

/* props: TweetProps => Estamos dizendo que a variavel props está cedendo acesso a função Tweet para ela usar as propriedades da TweetProps */

export function Tweet(props: TweetProps) {
    return (
      <p>{ props.text }</p>  
    );
}