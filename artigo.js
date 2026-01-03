/*botoes configuração*/
const zoomais = document.querySelector('.mais');
const zoomenos = document.querySelector('.menos'); 
const artigo = document.querySelector('.artigo'); 
const fidoartigo = document.querySelector('.fiartigo'); 
const fvolta= document.querySelector('.volta'); 
const fvai = document.querySelector('.vai'); 
const avanca = document.querySelector('.vaii'); 
const anterior= document.querySelector('.voltaa'); 
const pageinicial = document.querySelector('.home'); 
/*= document.querySelector('.'); */
const playtime = document.querySelector('.play'); 




const artigoarr = [
    {
        nomeArtigo:`DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS <br>
        ADOTADA E PROCLAMADA PELA ASSEMBLEIA GERAL DAS NAÇÕES UNIDAS (RESOLUÇÃO 217 A III) EM 10 DE DEZEMBRO 1948. <br>  <br>
        PREÂMBULO
        `,
        itemartigo:[
            `&nbsp;&nbsp; Considerando que o reconhecimento da dignidade inerente a todos os membros da família humana e de seus direitos iguais e inalienáveis é o fundamento da liberdade, da justiça e da paz no mundo, `,
            `&nbsp;&nbsp;  Considerando que o desprezo e o desrespeito pelos direitos humanos resultaram em atos bárbaros que ultrajaram a consciência da humanidade e que o advento de um mundo em que mulheres e homens gozem de liberdade de palavra, de crença e da liberdade de viverem a salvo do temor e da necessidade foi proclamado como a mais alta aspiração do ser humano comum,`,
            `&nbsp;&nbsp; Considerando ser essencial que os direitos humanos sejam protegidos pelo império da lei, para que o ser humano não seja compelido, como último recurso, à rebelião contra a tirania e a opressão, `,
            `&nbsp;&nbsp; Considerando ser essencial promover o desenvolvimento de relações amistosas entre as nações, `,
            `&nbsp;&nbsp; Considerando que os povos das Nações Unidas reafirmaram, na Carta, sua fé nos direitos fundamentais do ser humano, na dignidade e no valor da pessoa humana e na igualdade de direitos do homem e da mulher e que decidiram promover o progresso social e melhores condições de vida em uma liberdade mais ampla, `,
            `&nbsp;&nbsp; Considerando que os Países-Membros se comprometeram a promover, em cooperação com as Nações Unidas, o respeito universal aos direitos e liberdades fundamentais do ser humano e a observância desses direitos e liberdades, `,
            `&nbsp;&nbsp; Considerando que uma compreensão comum desses direitos e liberdades é da mais alta importância para o pleno cumprimento desse compromisso, `,
            `&nbsp;&nbsp; Agora portanto a Assembleia Geral proclama a presente Declaração Universal dos Direitos Humanos como o ideal comum a ser atingido por todos os povos e todas as nações, com o objetivo de que cada indivíduo e cada órgão da sociedade tendo sempre em mente esta Declaração, esforce-se, por meio do ensino e da educação, por promover o respeito a esses direitos e liberdades, e, pela adoção de medidas progressivas de caráter nacional e internacional, por assegurar o seu reconhecimento e a sua observância universais e efetivos, tanto entre os povos dos próprios Países-Membros quanto entre os povos dos territórios sob sua jurisdição. `,
        ]
    },
     {
        nomeArtigo:`ARTIGO 1`,
        itemartigo:[
            `&nbsp;&nbsp;Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade.`
        ]
    }, {
        nomeArtigo:`ARTIGO 2`,
        itemartigo:[
            `&nbsp;&nbsp;1.	Todo ser humano tem capacidade para gozar os direitos e as liberdades estabelecidos nesta Declaração, sem distinção de qualquer espécie, seja de raça, cor, sexo, língua, religião, opinião política ou de outra natureza, origem nacional ou social, riqueza, nascimento, ou qualquer outra condição. `,
            `&nbsp;&nbsp;2.	Não será também feita nenhuma distinção fundada na condição política, jurídica ou internacional do país ou território a que pertença uma pessoa, quer se trate de um território independente, sob tutela, sem governo próprio, quer sujeito a qualquer outra limitação de soberania.`
        ]
    }, {
        nomeArtigo:`ARTIGO 3`,
        itemartigo:[
          `&nbsp;&nbsp;Todo ser humano tem direito à vida, à liberdade e à segurança pessoal.`  
        ]
    }, {
        nomeArtigo:`ARTIGO 4`,
        itemartigo:[
            `&nbsp;&nbsp;Ninguém será mantido em escravidão ou servidão; a escravidão e o tráfico de escravos serão proibidos em todas as suas formas.`
        ]
    }, {
        nomeArtigo:`ARTIGO 5`,
        itemartigo:[
            `&nbsp;&nbsp;Ninguém será submetido à tortura, nem a tratamento ou castigo cruel, desumano ou degradante.`
        ]
    }, {
        nomeArtigo:`ARTIGO 6`,
        itemartigo:[
          `&nbsp;&nbsp;Todo ser humano tem o direito de ser, em todos os lugares, reconhecido como pessoa perante a lei.`  
        ]
    }, {
        nomeArtigo:`ARTIGO 7`,
        itemartigo:[
           `&nbsp;&nbsp;Todos são iguais perante a lei e têm direito, sem qualquer distinção, a igual proteção da lei. Todos têm direito a igual proteção contra qualquer discriminação que viole a presente Declaração e contra qualquer incitamento a tal discriminação.`
        ]
    }, {
        nomeArtigo:`ARTIGO 8`,
        itemartigo:[
          `&nbsp;&nbsp;Todo ser humano tem direito a receber dos tribunais nacionais competentes remédio efetivo para os atos que violem os direitos fundamentais que lhe sejam reconhecidos pela constituição ou pela lei.`
        ]
    }, {
        nomeArtigo:`ARTIGO 9`,
        itemartigo:[
            `&nbsp;&nbsp;Ninguém será arbitrariamente preso, detido ou exilado.`
        ]
    }, {
        nomeArtigo:`ARTIGO 10`,
        itemartigo:[
            `&nbsp;&nbsp;Todo ser humano tem direito, em plena igualdade, a uma justa e pública audiência por parte de um tribunal independente e imparcial, para decidir seus direitos e deveres ou fundamento de qualquer acusação criminal contra ele.`
        ]
    }, {
        nomeArtigo:`ARTIGO 11`,
        itemartigo:[
           `&nbsp;&nbsp;1.Todo ser humano acusado de um ato delituoso tem o direito de ser presumido inocente até que a sua culpabilidade tenha sido provada de acordo com a lei, em julgamento público no qual lhe tenham sido asseguradas todas as garantias necessárias à sua defesa. `,
           `&nbsp;&nbsp;2. Ninguém poderá ser culpado por qualquer ação ou omissão que, no momento, não constituíam delito perante o direito nacional ou internacional. Também não será imposta pena mais forte de que aquela que, no momento da prática, era aplicável ao ato delituoso.`
           
        ]
    }, {
        nomeArtigo:`ARTIGO 12`,
        itemartigo:[
            `&nbsp;&nbsp;Ninguém será sujeito à interferência na sua vida privada, na sua família, no seu lar ou na sua correspondência, nem a ataque à sua honra e reputação. Todo ser humano tem direito à proteção da lei contra tais interferências ou ataques.`
        ]
    }, {
        nomeArtigo:`ARTIGO 13`,
        itemartigo:[
            `&nbsp;&nbsp;1. Todo ser humano tem direito à liberdade de locomoção e residência dentro das fronteiras de cada Estado. `,
            `&nbsp;&nbsp;2. Todo ser humano tem o direito de deixar qualquer país, inclusive o próprio e a esse regressar.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 14`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano, vítima de perseguição, tem o direito de procurar e de gozar asilo em outros países. `,
            `&nbsp;&nbsp;2.Esse direito não pode ser invocado em caso de perseguição legitimamente motivada por crimes de direito comum ou por atos contrários aos objetivos e princípios das Nações Unidas.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 15`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem direito a uma nacionalidade. `,
            `&nbsp;&nbsp;2.Ninguém será arbitrariamente privado de sua nacionalidade, nem do direito de mudar de nacionalidade.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 16`,
        itemartigo:[
           `&nbsp;&nbsp;1.Os homens e mulheres de maior idade, sem qualquer restrição de raça, nacionalidade ou religião, têm o direito de contrair matrimônio e fundar uma família. Gozam de iguais direitos em relação ao casamento, sua duração e sua dissolução. `,
           `&nbsp;&nbsp;2.O casamento não será válido senão com o livre e pleno consentimento dos nubentes. `,
           `&nbsp;&nbsp;3.A família é o núcleo natural e fundamental da sociedade e tem direito à proteção da sociedade e do Estado.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 17`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem direito à propriedade, só ou em sociedade com outros. `,
            `&nbsp;&nbsp;2.Ninguém será arbitrariamente privado de sua propriedade.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 18`,
        itemartigo:[
            `&nbsp;&nbsp;Todo ser humano tem direito à liberdade de pensamento, consciência e religião; esse direito inclui a liberdade de mudar de religião ou crença e a liberdade de manifestar essa religião ou crença pelo ensino, pela prática, pelo culto em público ou em particular.`
        ]
    }, {
        nomeArtigo:`ARTIGO 19`,
        itemartigo:[
           `&nbsp;&nbsp;Todo ser humano tem direito à liberdade de opinião e expressão; esse direito inclui a liberdade de, sem interferência, ter opiniões e de procurar, receber e transmitir informações e idéias por quaisquer meios e independentemente de fronteiras.`
        ]
    }, {
        nomeArtigo:`ARTIGO 20`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem direito à liberdade de reunião e associação pacífica. `,
            `&nbsp;&nbsp;2.Ninguém pode ser obrigado a fazer parte de uma associação.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 21`,
        itemartigo:[
         `&nbsp;&nbsp;1.Todo ser humano tem o direito de tomar parte no governo de seu país diretamente ou por intermédio de representantes livremente escolhidos. `,
         `&nbsp;&nbsp;2.Todo ser humano tem igual direito de acesso ao serviço público do seu país.`, 
         `&nbsp;&nbsp;3.A vontade do povo será a base da autoridade do governo; essa vontade será expressa em eleições periódicas e legítimas, por sufrágio universal, por voto secreto ou processo equivalente que assegure a liberdade de voto.`
         
        ]
    }, {
        nomeArtigo:`ARTIGO 22`,
        itemartigo:[
            `&nbsp;&nbsp;Todo ser humano, como membro da sociedade, tem direito à segurança social, à realização pelo esforço nacional, pela cooperação internacional e de acordo com a organização e recursos de cada Estado, dos direitos econômicos, sociais e culturais indispensáveis à sua dignidade e ao livre desenvolvimento da sua personalidade.`
        ]
    }, {
        nomeArtigo:`ARTIGO 23`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem direito ao trabalho, à livre escolha de emprego, a condições justas e favoráveis de trabalho e à proteção contra o desemprego. `,
            `&nbsp;&nbsp;2.Todo ser humano, sem qualquer distinção, tem direito a igual remuneração por igual trabalho. `,
            `&nbsp;&nbsp;3.Todo ser humano que trabalha tem direito a uma remuneração justa e satisfatória que lhe assegure, assim como à sua família, uma existência compatível com a dignidade humana e a que se acrescentarão, se necessário, outros meios de proteção social. `,
            `&nbsp;&nbsp;4.Todo ser humano tem direito a organizar sindicatos e a neles ingressar para proteção de seus interesses.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 24`,
        itemartigo:[
            `&nbsp;&nbsp;Todo ser humano tem direito a repouso e lazer, inclusive a limitação razoável das horas de trabalho e a férias remuneradas periódicas.`
        ]
    }, {
        nomeArtigo:`ARTIGO 25`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem direito a um padrão de vida capaz de assegurar a si e à sua família saúde, bem-estar, inclusive alimentação, vestuário, habitação, cuidados médicos e os serviços sociais indispensáveis e direito à segurança em caso de desemprego, doença invalidez, viuvez, velhice ou outros casos de perda dos meios de subsistência em circunstâncias fora de seu controle. `,
            `&nbsp;&nbsp;2.A maternidade e a infância têm direito a cuidados e assistência especiais. Todas as crianças, nascidas dentro ou fora do matrimônio, gozarão da mesma proteção social.`
            
        ]
    }, {
        nomeArtigo:` ARTIGO 26`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem direito à instrução. A instrução será gratuita, pelo menos nos graus elementares e fundamentais. A instrução elementar será obrigatória. A instrução técnico-profissional será acessível a todos, bem como a instrução superior, esta baseada no mérito. `,
            `&nbsp;&nbsp;2.A instrução será orientada no sentido do pleno desenvolvimento da personalidade humana e do fortalecimento do respeito pelos direitos do ser humano e pelas liberdades fundamentais. A instrução promoverá a compreensão, a tolerância e a amizade entre todas as nações e grupos raciais ou religiosos e coadjuvará as atividades das Nações Unidas em prol da manutenção da paz. `,
            `&nbsp;&nbsp;3.Os pais têm prioridade de direito na escolha do gênero de instrução que será ministrada a seus filhos.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 27`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem o direito de participar livremente da vida cultural da comunidade, de fruir as artes e de participar do progresso científico e de seus benefícios. `,
            `&nbsp;&nbsp;2.Todo ser humano tem direito à proteção dos interesses morais e materiais decorrentes de qualquer produção científica literária ou artística da qual seja autor.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 28`,
        itemartigo:[
            `&nbsp;&nbsp;Todo ser humano tem direito a uma ordem social e internacional em que os direitos e liberdades estabelecidos na presente Declaração possam ser plenamente realizados.`
        ]
    }, {
        nomeArtigo:`ARTIGO 29`,
        itemartigo:[
            `&nbsp;&nbsp;1.Todo ser humano tem deveres para com a comunidade, na qual o livre e pleno desenvolvimento de sua personalidade é possível. `,
            `&nbsp;&nbsp;2.No exercício de seus direitos e liberdades, todo ser humano estará sujeito apenas às limitações determinadas pela lei, exclusivamente com o fim de assegurar o devido reconhecimento e respeito dos direitos e liberdades de outrem e de satisfazer as justas exigências da moral, da ordem pública e do bem-estar de uma sociedade democrática. `,
            `&nbsp;&nbsp;3.Esses direitos e liberdades não podem, em hipótese alguma, ser exercidos contrariamente aos objetivos e princípios das Nações Unidas.`
            
        ]
    }, {
        nomeArtigo:`ARTIGO 30`,
        itemartigo:[
            `&nbsp;&nbsp;Nenhuma disposição da presente Declaração pode ser interpretada como o reconhecimento a qualquer Estado, grupo ou pessoa, do direito de exercer qualquer atividade ou praticar qualquer ato destinado à destruição de quaisquer dos direitos e liberdades aqui estabelecidos.`
        ]
    },

       
];
var contador = 0;
var indexartigo = 0 ;
artigo.innerHTML=artigoarr[contador].nomeArtigo;
fidoartigo.innerHTML=artigoarr[contador].itemartigo[indexartigo];



/*function vaiartigos(){
indexartigo++;    
fidoartigo.innerHTML=artigoarr[contador].itemartigo[indexartigo];

console.log("artigos funcionando")
console.log(indexartigo);
}*/
/*function voltaartigos(){
indexartigo--;    
fidoartigo.innerHTML=artigoarr[contador].itemartigo[indexartigo];

console.log("artigos funcionando")
console.log(indexartigo);
}*/


function avancaartigoo(){
 if(contador < artigoarr.length -1){
   
 contador++;
 indexartigo=0;
 artigo.innerHTML=artigoarr[contador].nomeArtigo;
fidoartigo.innerHTML=artigoarr[contador].itemartigo[indexartigo];
    }
    
}
function voltaartigoo(){
    if(contador > 0){
      contador--;
 indexartigo=0;
 artigo.innerHTML=artigoarr[contador].nomeArtigo;
fidoartigo.innerHTML=artigoarr[contador].itemartigo[indexartigo];
    }
    
}



function vaiartigos(){
if(indexartigo<artigoarr[contador].itemartigo.length -1){
indexartigo++;    
fidoartigo.innerHTML=artigoarr[contador].itemartigo[indexartigo];

console.log("artigos funcionando")
console.log(indexartigo);
}else{
    avancaartigoo();
}
}

function voltaartigos(){
 if(indexartigo > 0){
     indexartigo--;    
fidoartigo.innerHTML=artigoarr[contador].itemartigo[indexartigo];

console.log("artigos funcionando")
console.log(indexartigo);
    }else{
        voltaartigoo();
    }
}






