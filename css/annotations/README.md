# Annotations

This file will be used to store my personal annotations, things that I've found interesting to save. So I'll be pretty much using only portuguese here, because it's easier for me to read

### Media Queries
Aqui estão alguns dos principais breakpoints para manter a responsividade entre dispositivos com Css.
```css
/* Dispositivos muito pequenos (Celulares, até 480px) */
@media screen and (max-width: 767px) {...}

/* Dispositivos pequenos (tablets, acima de 768px) */
@media (min-width: 768px) and (max-width: 991px) {...}

/* Tablets/Desktops e dispositivos maiores  */
@media (min-width: 992px) and (max-width: 1199px) {...}

/* Desktops e dispositivos maiores */
@media screen and (min-width: 1200px) {...}
```

### Propriedades e Unidades

Essas são algumas das unidades recomendadas, mas é preciso avaliar o que se deseja alcançar antes, nas respectivas propriedades:

```css
/* rem(preferência) ou em ou px */
{
    padding: 1rem;
    margin: 1rem;
    font-size: 1rem;
}

/* vw(preferência) ou % */
{
    width: 100vw;
}

/* vh(preferência) ou % */
{
    height: 100vw;
}

/* px */
{
    border: 1px;
}

/* px */
{
    border: 1px;
}

/* % */
{
    top: 100%;
    left: 100%;
    right: 100%;
    bottom: 100%;
}
```

### Autoprefixer

Após criar os arquivos css, usar o [Autoprefixer](https://autoprefixer.github.io/) para adicionar os prefixos de maneira a deixar o código compatível com mais browsers