import Section from "../shared/Section";
import NavApp from "./NavApp";
import NavCategories from "./NavCategories";

export default function Home() {
    const categories = {
        categ1: 'Categoria 1',
        categ2: 'Categoria 2',
        categ3: 'Categoria 3',
        categ4: 'Categoria 4',
        categ5: 'Categoria 5',
        categ6: 'Categoria 6',
        categ7: 'Categoria 7',
        categ8: 'Categoria 8',
        categ9: 'Categoria 9',
        categ10: 'Categoria 10',
    }
    const subSection = {
        sub1: 'Início',
        sub2: 'Produtos',
        sub3: 'Carrinho',
        sub4: 'Quem somos',
        sub5: 'Contato',
        sub6: 'Nosso APP'
    }
    
    return (
        <Section>
            <NavApp {...subSection}/>
            <NavCategories {...categories} />
        </Section>
    )
}