const paragrafo = document.querySelector(".paragrafo");
const youtube = document.querySelector(".you");
const btns = document.querySelectorAll(".btn");
var contador = 0;

const perguntas = [
    {questionamento:`
        1. INSTITUTO AOCP - 2022 <br> <br>
&nbsp;&nbsp;É missão da ordem constitucional a organização do Estado, a instituição de um sistema político e a eleição
de direitos e garantias fundamentais. Assim, é próprio do Direito Constitucional e da Constituição Federal que
suas disposições se dediquem a normatizar as relações internacionais do País, inclusive por meio de tratados,
acordos e convenções internacionais. Sobre o assunto, assinale a alternativa correta.  
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   Compete privativamente ao Presidente da República resolver definitivamente sobre tratados, acordos ou
atos internacionais que acarretem encargos ou compromissos gravosos ao patrimônio nacional.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
Os tratados internacionais passam a valer internamente a partir da sua aprovação pelo Poder Legislativo, que se formalizará através da Lei Ordinária competente para tanto
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
A manifestação de adesão para com a criação de Tribunal Penal Internacional é requisito para que o
Brasil se submeta àquela jurisdição.
`,resposta:"v"},
{textobtn:` <span class="sp">(D)</span>
 Os tratados e convenções internacionais sobre comércio que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes à
emenda constitucional.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
Compete à União, por meio do Congresso Nacional, participar diretamente de organizações internacionais que vinculem o Estado brasileiro.
`,resposta:""},

 ]   
},
    {questionamento:` 
        2. INSTITUTO AOCP - 2022 <br> <br>
&nbsp;&nbsp;O Decreto Federal nº 40, de 15 de fevereiro de 1991, promulga a Convenção Contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes. Com base no referido documento e na Constituição
Federal Brasileira de 1988, assinale a alternativa correta. 

`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   O Comitê contra a Tortura será composto por nove peritos de elevada reputação moral e reconhecida
competência em matéria de direitos humanos, os quais exercerão suas funções a título pessoal. Os peritos
serão indicados pela Organização das Nações Unidas (ONU) , levando em conta uma distribuição geográfica
equitativa e a utilidade da participação de algumas pessoas com experiência jurídica.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
 Considerando os casos de abuso de poder que ocorreram em território brasileiro, tem-se que cada Estado Parte assegurará que o ensino e a informação sobre a proibição de tortura sejam plenamente incorporados
no treinamento do pessoal militar, deixando de lado o pessoal civil encarregado da aplicação da lei, do pessoal
médico, dos funcionários públicos e de quaisquer outras pessoas que possam participar da custódia, interrogatório ou tratamento de qualquer pessoa submetida a qualquer forma de prisão, detenção ou reclusão.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
Todos os atos de tortura devem ser considerados crimes segundo a sua legislação penal, cabendo a
cada um dos Estados Partes assegurar o cumprimento dessa medida. O mesmo aplicar-se-á à tentativa de
tortura e a todo ato de qualquer pessoa que constitua cumplicidade ou participação na tortura.
`,resposta:"v"},
{textobtn:` <span class="sp">(D)</span>
 Em situações totalmente extraordinárias, como ameaça ou estado de guerra, instabilidade política interna ou qualquer outra emergência pública, é possível se relativizar a tortura, desde que haja o devido aval do
Conselho de Segurança da ONU.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
Os Estados Partes devem submeter relatórios sobre as medidas por eles adotadas no cumprimento
das obrigações assumidas em virtude da presente Convenção ao Comitê, sendo o Presidente do Conselho de
Segurança da ONU o responsável por transmitir tais dados aos demais Estados Partes.
`,resposta:""},

 ]   
},    {questionamento:` 
    3. INSTITUTO AOCP - 2022 <br> <br>
&nbsp;&nbsp;Em 1948, pela Declaração Universal dos Direitos Humanos, foi reconhecida a dignidade inerente a todos os
membros da família humana e seus direitos iguais e inalienáveis, sendo esses elementos fundamento da liberdade, da justiça e da paz no mundo. Com base na teoria geral dos direitos humanos e na Declaração Universal
dos Direitos Humanos, assinale a alternativa correta. 
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
    Todo ser humano acusado de um ato delituoso tem o direito de ser presumido inocente até que a sua
culpabilidade tenha sido demonstrada, em julgamento arbitral.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
Todo ser humano, quando vítima de perseguição, não terá o direito de procurar e de gozar asilo em outros países quando se tratar de atos contrários aos objetivos e princípios das Nações Unidas.
`,resposta:"v"},
{textobtn:` <span class="sp">(C)</span>
 O direito à liberdade de pensamento, consciência e religião deve ser relativizado quando se tratar de
mudança de religião ou crença.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
Todo ser humano tem direito à instrução, que não deve ter caráter de obrigatoriedade, mas deve ser
oferecida de forma gratuita pelo menos nos graus elementares e fundamentais. 

`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
Todo ser humano tem direito a uma nacionalidade, a qual irá acompanhar o indivíduo até o dia de sua
morte, uma vez que lhe é vedada a mudança de nacionalidade.
`,resposta:""},

 ]   
},    {questionamento:` 
    4. INSTITUTO AOCP - 2022 <br> <br>
&nbsp;&nbsp;Em uma abordagem policial, quando da revista do suspeito, foram encontradas provas de determinado
crime. Ao ser questionado sobre a procedência dos produtos, o suspeito informou que nada iria declarar. Foi
insistido para que o suspeito revelasse as informações desejadas e, como não o fez, este foi agredido por um
dos policiais que realizavam a abordagem no intuito de obter os dados almejados. Conforme dispõe o Código
de Conduta para os Funcionários Responsáveis pela Aplicação da Lei (Resolução da ONU nº 34/169/1979) ,
espera-se que você, na qualidade de policial que acompanhava a abordagem,
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   considerada a tensão existente em toda abordagem dessa natureza, invoque circunstâncias excepcionais para justificar a conduta praticada.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
 venha a se manifestar imediatamente de forma contrária à postura agressiva de um dos policiais envolvidos na abordagem.
`,resposta:"v"},
{textobtn:` <span class="sp">(C)</span>
 entenda que, por se tratar de uma consequência legítima da tensão da abordagem, a menção do ato ao
superior hierárquico será desnecessária.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
entenda como comum a presente prática, uma vez que é necessária para evitar abusos por parte dos
suspeitos em geral. 
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
perante a dinâmica dos fatos, não realize qualquer conduta que possa prejudicar a abordagem, como se
insurgir contra a postura de outra autoridade policial, mesmo que agressiva.
`,resposta:""},

 ]   
},    {questionamento:` 
    5. INSTITUTO AOCP - 2024 <br> <br>
&nbsp;&nbsp;Acerca dos casos em que houve a condenação do Brasil na Corte Interamericana de Direitos Humanos,
assinale a alternativa INCORRETA.
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
    No caso Povo Indígena Xucuru e seus Membros, a condenação deveu-se, entre outros fatores, à omissão estatal no que se refere a reconhecer, demarcar e titular os territórios indígenas do Povo Indígena Xucuru.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
O caso Ximenes Lopes diz respeito à responsabilidade internacional do Estado pelos maus-tratos e pela
morte a que o Sr. Damião Ximenes Lopes foi submetido em um centro de saúde privado que prestava serviços
no âmbito do sistema público de saúde.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
 O caso Trabalhadores da Fazenda Brasil Verde refere-se à sujeição de pessoas ao trabalho forçado e à
servidão por dívidas na Fazenda Brasil Verde, localizada no Estado do Paraná.
`,resposta:"v"},
{textobtn:` <span class="sp">(D)</span>
O caso Gomes Lund e outros (“Guerrilha do Araguaia”) diz respeito à responsabilidade internacional do
Estado pelos desaparecimentos forçados de membros da Guerrilha do Araguaia que ocorreram entre 1972 e
1975, bem como pela falta de investigação desses acontecimentos.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
 Os fatos do caso Nogueira de Carvalho ocorreram na cidade de Macaíba, Estado do Rio Grande do
Norte, onde Gilson era um advogado de direitos humanos e trabalhava em um caso relativo aos “meninos de
ouro”, um alegado grupo de extermínio que, supostamente, incluía agentes da polícia civil e outros funcionários
estatais.
`,resposta:""},

 ]   
},    {questionamento:`
     6. NSTITUTO AOCP - 2024 <br> <br>
&nbsp;&nbsp;Acerca da hierarquia dos tratados de direitos humanos no direito brasileiro, assinale a alternativa correta.
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   Os tratados de direitos humanos aprovados pelo Congresso Nacional, atendendo ao art. 5º, § 3º , da
CF/88 (EC 45, de 2004) , possuem força de norma supraconstitucional.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
 Os tratados de direitos humanos aprovados pelo Congresso Nacional sem atender aos critérios do art.
5º, § 3º , da CF/88 possuem força normativa supralegal, a exemplo d a Convenção Americana sobre Direitos
Humanos.
`,resposta:"v"},
{textobtn:` <span class="sp">(C)</span>
A Convenção Interamericana contra o Racismo, a Discriminação Racial e Formas Correlatas de Intolerância possui força de norma supralegal, porém infraconstitucional.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
 Os tratados que não envolvam matéria de direitos humanos possuem força de norma supralegal, porém
infraconstitucional.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
Os tratados de direitos humanos possuem força de norma constitucional, independentemente do quórum de aprovação no Congresso Nacional .
`,resposta:""},

 ]   
},    {questionamento:` 
    7. NSTITUTO AOCP - 2024 <br> <br>
&nbsp;&nbsp;Analise as seguintes afirmativas e a relação proposta entre elas: <br>
&nbsp;&nbsp;I. A Corte Interamericana de Direitos Humanos reiterou em sua jurisprudência, inclusive nos casos em que
o Estado Brasileiro foi condenado diretamente, o dever de controlar a convencionalidade pelo Poder Judiciário,
no sentido de que <br>
&nbsp;&nbsp;II. cabe aos juízes e juízas aplicar a norma mais benéfica à promoção dos direitos humanos no equilíbrio
normativo impactado pela internacionalização cada vez mais crescente e a necessidade de se estabelecer um
diálogo entre os juízes. <br> <br>
&nbsp;&nbsp;A respeito dessas afirmativas, assinale a alternativa correta.
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   A primeira afirmativa é verdadeira , e a segunda é falsa.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
A primeira afirmativa é falsa , e a segunda é verdadeira.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
 As duas afirmativas são verdadeiras , e a segunda complementa a primeira.
`,resposta:"v"},
{textobtn:` <span class="sp">(D)</span>
As duas afirmativas são verdadeiras, mas a segunda não complementa a primeira.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
As duas afirmativas são falsas.
`,resposta:""},

 ]   
},    {questionamento:` 
    8. INSTITUTO AOCP - 2024 <br> <br>
&nbsp;&nbsp;A Declaração Universal dos Direitos Humanos foi aprovada pela Assembleia Geral da Organização das
Nações Unidas (ONU) , em 10 de dezembro de 1948, sob a forma de
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   Resolução.
 `,resposta:"v"},
{textobtn:` <span class="sp">(B)</span>
Decreto.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
Emenda à Constituição.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
Protocolo.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
Lei ordinária.
`,resposta:""},

 ]   
},    {questionamento:` 
    9. INSTITUTO AOCP - 2024 <br>  <br>
&nbsp;&nbsp;Segundo a doutrina, os direitos humanos gozam de determinadas características que, em seu conjunto,
compõem uma proteção de intangibilidade aos direitos tidos como essenciais a uma vida digna. Nesse contexto, reconhecer que os direitos humanos não se perdem pela passagem do tempo é traço característico da 
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
  inalienabilidade. 
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
indisponibilidade.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
onerosidade.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
irrenunciabilidade.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
imprescritibilidade.
`,resposta:"v"},

 ]   
},    {questionamento:`
    10. INSTITUTO AOCP - 2022 <br> <br>
&nbsp;&nbsp;Em relação à hierarquia normativa dos tratados de direitos humanos, assinale a alternativa correta.  
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   O STF firmou a teoria do duplo estatuto dos tratados de direitos humanos, consagrando de natureza
constitucional os aprovados pelo rito do art. 5º, §3º, da CF/88 (quórum especial) e de natureza supralegal para
todos os demais aprovados pelo rito comum (maioria simples, turno único em cada Casa do Congresso) .
 `,resposta:"v"},
{textobtn:` <span class="sp">(B)</span>
Não cabe ao Poder Judiciário realizar o chamado controle de convencionalidade nacional das leis, utilizando os tratados de direitos humanos como parâmetro supralegal ou mesmo equivalente à emenda constitucional.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
Os tratados incorporados pelo rito especial previsto no art. 5º, §3º, da CF/88 (aprovados em dois turnos,
por três quintos dos votos em cada Casa do Congresso Nacional) não podem servir de parâmetro para avaliar
a constitucionalidade de uma norma infraconstitucional qualquer.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
Adota-se o estatuto supraconstitucional de todos os tratados internacionais de direitos humanos ratificados pelo Brasil, com base na necessidade de cumprimento dos tratados, mesmo que contrariem a Constituição.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
O art. 5º, §2º, da CF/88, mesmo antes da Emenda Constitucional nº 45/2004, já assegurava a hierarquia
de norma constitucional aos tratados de direitos humanos ratificados pelo Brasil.
`,resposta:""},

 ]   
},    {questionamento:` 
    11. INSTITUTO AOCP - 2021 <br> <br>
&nbsp;&nbsp;A Declaração Universal dos Direitos Humanos de 1948 surge no pós-guerra como reação aos horrores
vivenciados pelo mundo com as experiências nazi-fascistas. Dentre as seguintes alternativas, assinale a que
NÃO representa uma garantia prevista nesse importante instrumento.
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
    Direito de deixar qualquer país, inclusive o próprio, e a este regressar.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
Direito à prestação jurisdicional efetiva para defesa contra atos que violem direitos fundamentais.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
Direito de acesso à Corte Interamericana de Direitos Humanos em duplo grau de jurisdição no caso de
ações propostas diretamente no Supremo Tribunal Federal.
`,resposta:"v"},
{textobtn:` <span class="sp">(D)</span>
Direito de procurar e de gozar asilo em outros países.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
Direito de contrair matrimônio e fundar uma família.
`,resposta:""},

 ]   
},    {questionamento:` 
    12. INSTITUTO AOCP - 2021 <br>  <br>
&nbsp;&nbsp;Os direitos humanos constituem matéria cuja tutela não se reserva unicamente ao âmbito doméstico dos
Estados nacionais, mas também ocupa lugar na agenda da comunidade internacional. Sobre a teoria contemporânea dos direitos humanos, assinale a alternativa correta.
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   Os Direitos Humanos de defesa relacionam-se com a prerrogativa de a pessoa solicitar uma conduta
ativa do Estado a fim de promover seus direitos fundamentais.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
Pode-se afirmar que a concepção contemporânea de Direitos Humanos é marcada pela universalidade
e pela divisibilidade desses direitos.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
Pode ser conferida interpretação aos artigos da Declaração Universal dos Direitos Humanos (1948) de
forma que o exercício de um direito ali previsto anule ou restrinja o exercício de outro, destruindo esse último
direito.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
Positivistas como Hans Kelsen e Alf Ross afirmam que os direitos humanos são direitos inatos à pessoa,
que decorrem da sua própria condição de ser humano.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
A partir de um resgate da visão kantiana, a única condição exigida para que alguém seja titular de Direitos Humanos é sua condição de ser humano.
`,resposta:"v"},

 ]   
},    {questionamento:` 
    13. INSTITUTO AOCP - 2020 <br> <br>
A Declaração Universal dos Direitos Humanos prevê, no artigo III, que todo ser humano tem direito
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   à vida, à liberdade e à democracia.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
à vida, à família e ao trabalho.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
à vida, à saúde e ao trabalho.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
à vida, à segurança pessoal e ao pleno emprego.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
à vida, à liberdade e à segurança pessoal.
`,resposta:"v"},

 ]   
},    {questionamento:` 
    14. INSTITUTO AOCP - 2020 <br> <br>
São princípios da Declaração Universal dos Direitos Humanos:
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   dignidade, equidade e individualidade.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
igualdade, equidade e singularidade.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
dignidade, igualdade e liberdade.
`,resposta:"v"},
{textobtn:` <span class="sp">(D)</span>
paz, pão e terra.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
terra, família e trabalho.
`,resposta:""},

 ]   
},    {questionamento:`
   18. INSTITUTO AOCP - 2021 <br> <br>
&nbsp;&nbsp;Principalmente a partir da segunda metade do Século XX, as relações internacionais entre os países geraram inúmeros tratados protetivos e afirmativos dos Direitos Humanos. Referido sistema estabelece um perene
diálogo entre os tratados e entre os tratados e os ordenamentos jurídicos internos dos países signatários. Acerca da interpretação e da aplicação dos tratados internacionais de proteção aos Direitos Humanos pelo Supremo
Tribunal Federal, assinale a alternativa correta.  
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   O entendimento do Supremo Tribunal Federal em controle de convencionalidade sobre a Convenção
Americana de Direitos Humanos (Pacto de San Jose da Costa Rica – 1969) é de que, tendo em vista a soberania do Estado brasileiro, nada impede que um brasileiro seja processado e julgado pelos mesmos fatos pelos
quais fora condenado em ação penal já transitada em julgado sob a jurisdição de outro Estado.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
O Supremo Tribunal Federal julgou incompatível com a Constituição da República e a Convenção Interamericana de Direitos Humanos o tipo penal do desacato, previsto no art. 331 do Código Penal brasileiro.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
Seguindo entendimento da Corte Interamericana de Direitos Humanos, é constitucional a exigência de
diploma para o exercício da profissão de jornalista, posto tratar-se de medida que assegura a credibilidade e a
liberdade de expressão e pensamento.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
Nos termos do decidido liminarmente pelo Supremo Tribunal Federal na ADPF 347, por força do Pacto
dos Direitos Civis e Políticos, da Convenção Interamericana de Direitos Humanos e como decorrência da cláusula do devido processo legal, a realização de audiência de apresentação é de observância obrigatória.
`,resposta:"v"},
{textobtn:` <span class="sp">(E)</span>
Segundo o Supremo Tribunal Federal, não há obrigatoriedade do Estado brasileiro em adotar medidas
para garantir o pleno exercício do direito de propriedade de comunidades formadas por descendentes de escravos fugitivos sobre as terras tradicionais com as quais mantêm relações territoriais.
`,resposta:""},

 ]   
},    {questionamento:` 
    19. INSTITUTO AOCP - 2021 <br> <br>
&nbsp;&nbsp;O Juízo da 5ª Vara Cível de Ananindeua expediu mandado de prisão contra Roberto da Silva, em razão
deste ter se recusado a restituir ao Juízo, quando intimado, um veículo que havia sido, após penhorado e removido, depositado em sua confiança. Fundamentou em sua decisão, o Juízo que a Constituição Federal prevê
em seu art. 5º, LXVII, a possibilidade de prisão civil do depositário infiel e que não houve, desde 1988, emenda
à constituição que revogasse referido texto, estando, portanto, em pleno vigor. A respeito desse caso hipotético
e considerando a interpretação e a aplicabilidade dos tratados sobre direitos humanos no ordenamento jurídico
brasileiro, assinale a alternativa correta.
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   Está incorreto o Juiz. O direito brasileiro não admite a prisão civil do depositário infiel, mesmo estando
essa hipótese expressamente prevista na Constituição, já que esta perdeu aplicabilidade diante do caráter supralegal do artigo 7, nº 7, da Convenção Americana sobre Direitos Humanos, que proíbe qualquer prisão civil
por dívida, salvo a proveniente de obrigação alimentar, impedindo, assim, a eficácia das disposições infraconstitucionais brasileiras que previam a prisão civil do depositário infiel.
 `,resposta:"v"},
{textobtn:` <span class="sp">(B)</span>
Está correto o Juiz, uma vez que os tratados de direitos humanos são internalizados por legislação
ordinária e as disposições neles contidas que contrariem expressamente o texto constitucional brasileiro são
ineficazes em relação à jurisdição nacional.
`,resposta:""},
{textobtn:` <span class="sp">(C)</span>
Está correto o Juiz. É lícita a prisão civil do depositário infiel, já que a Convenção Americana sobre Direitos Humanos não fora submetida ao rito do art. 5º, §3º, da CFB (1988) e possui status de legislação ordinária,
continuando em pleno vigor e aplicável o art. 5º, LXVII, da CF/88, e eficazes as leis infraconstitucionais que
preveem a prisão civil do depositário infiel.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
Está incorreto o Juiz. Os tratados sobre direitos humanos aprovados no Brasil antes da EC 45, de 2004,
automaticamente receberam status de Emenda constitucional, já que, à época, não se exigia o procedimento
hoje previsto no art. 5º, §3º, da CFB (1988) . Assim, é inconstitucional a prisão civil do depositário infiel que fora
revogada pela Convenção Americana sobre Direitos Humanos.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
Está incorreto o Juiz. Com base na Convenção Americana sobre Direitos Humanos, o Supremo Tribunal
Federal do Brasil decidiu pela inconstitucionalidade da expressão “e a do depositário infiel” prevista na parte
final do art. 5º, LXVII, da CFB (1988) , optando pela redução do texto constitucional, pelo que é inconstitucional
a prisão civil do depositário infiel.
`,resposta:""},

 ]   
},    {questionamento:` 
  20. INSTITUTO AOCP - 2024 <br> <br>
&nbsp;&nbsp;Os direitos humanos são inerentes à condição humana e as denominadas dimensões possuem uma função
didática para o estudo do reconhecimento de cada categoria desses direitos, isso porque eles são interdependentes. Assim, de acordo com a doutrina, há os direitos de primeira dimensão (de titularidade individual) , os
direitos de segunda dimensão (de titularidade coletiva) e os direitos de terceira dimensão (de titularidade difusa)
.<br> &nbsp;&nbsp;Considerando a classificação proposta pela doutrina, analise os seguintes direitos e assinale a alternativa que
apresenta suas respectivas dimensões, na mesma ordem. <br> <br>
&nbsp;&nbsp;I. Direito à liberdade de crença. <br>
&nbsp;&nbsp;II. Direito à conservação e utilização do patrimônio histórico e cultural. <br>
&nbsp;&nbsp;III. Direito à educação. <br>
&nbsp;&nbsp;IV. Direito à saúde. <br>
&nbsp;&nbsp;V. Direito ao reconhecimento da pessoa humana.  
`,
 link:"",
 opcoes:[
{textobtn:` <span class="sp">(A)</span>
   2ª dimensão; 3ª dimensão; 2ª dimensão; 2ª dimensão; 2ª dimensão.
 `,resposta:""},
{textobtn:` <span class="sp">(B)</span>
1ª dimensão; 3ª dimensão; 2ª dimensão; 2ª dimensão; 1ª dimensão.
`,resposta:"v"},
{textobtn:` <span class="sp">(C)</span>
1ª dimensão; 2ª dimensão; 3ª dimensão; 3ª dimensão; 2ª dimensão.
`,resposta:""},
{textobtn:` <span class="sp">(D)</span>
2ª dimensão; 2ª dimensão; 2ª dimensão; 2ª dimensão; 1ª dimensão.
`,resposta:""},
{textobtn:` <span class="sp">(E)</span>
3ª dimensão; 3ª dimensão; 2ª dimensão; 2ª dimensão; 1ª dimensão.
`,resposta:""},

 ]   
},
























];
/*
const paragrafo 
const youtube 
const btns
*/
    paragrafo.innerHTML=perguntas[0].questionamento; 
    youtube.href=perguntas[0].link; 
    
    var index = 0; 
    btns.forEach((item)=>{
        item.innerHTML=perguntas[0].opcoes[index].textobtn;
        item.dataset.respostadata=perguntas[0].opcoes[index].resposta;
        item.addEventListener('click',btnclicado);
        index++;
    });
  

function proxima(){
    if(contador < perguntas.length -1){
        contador++;
          reset();
    paragrafo.innerHTML=perguntas[contador].questionamento; 
    youtube.href=perguntas[contador].link; 
    
    var index = 0; 
    btns.forEach((item)=>{
        item.innerHTML=perguntas[contador].opcoes[index].textobtn;
        item.dataset.respostadata=perguntas[contador].opcoes[index].resposta;
        item.addEventListener('click',btnclicado);
        index++;
    });

    }
  
   


}


function volta(){
    if(contador > 0){
        contador--;
     reset();
    paragrafo.innerHTML=perguntas[contador].questionamento; 
    youtube.href=perguntas[contador].link; 
    
    var index = 0; 
    btns.forEach((item)=>{
        item.innerHTML=perguntas[contador].opcoes[index].textobtn;
        item.dataset.respostadata=perguntas[contador].opcoes[index].resposta;
        item.addEventListener('click',btnclicado);
        index++;
    });   
    }
    
    


}

function reset(){
   paragrafo.innerHTML='';
   youtube.href='';  
   var index = 0;

    btns.forEach((item)=>{
    item.innerHTML='';
    item.dataset.respostadata='';
    item.classList.remove("correto");   
    item.classList.remove("incorreto"); 
    item.disabled = false;
    
    index++;
    console.log(index); 
    console.log(item);
    });
   
}

function btnclicado(e){
var btclicado = event.target;
var idclicado = event.target.id; 
if(btclicado.dataset.respostadata=="v"){
var correto = document.getElementById(idclicado).classList;
    correto.add("correto");
}else{
var correto = document.getElementById(idclicado).classList;
    correto.add("incorreto");
}
btns.forEach((item)=>{
if(item.dataset.respostadata=="v"){
    item.classList.add("correto");
}
item.disabled=true;
});
}

/*
bkp de tudo 
const paragrafo = document.querySelector(".paragrafo");
const youtube = document.querySelector(".you");
const btns = document.querySelectorAll(".btn");
var contador = 0;

const perguntas = [
{questionamento:`Qual é a cilindrada do motor da Himalayan 450?1`,
 link:"https://www.youtube.com/shorts/f7WjW88tC5A",
 opcoes:[
{textobtn:`A) 411 cm³`,resposta:""},
{textobtn:`B) 452 cm³`,resposta:"v"},
{textobtn:`C) 500 cm³`,resposta:""},
{textobtn:`D) 350 cm³`,resposta:""},
 ]   
},
{questionamento:`Qual desses recursos tecnológicos está presente na Himalayan 450?2`,
 link:"",
 opcoes:[
{textobtn:`A) Painel analógico simples sem conectividade`,resposta:""},
{textobtn:`B) Modos de pilotagem e painel TFT com navegação integrada`,resposta:"v"},
{textobtn:`C) Carburador no lugar de injeção eletrônica`,resposta:""},
{textobtn:`D) Suspensão hidráulica a ar`,resposta:""},
 ]   
},
{questionamento:`Qual combinação de rodas a Himalayan 450 utiliza?3`,
 link:"",
 opcoes:[
{textobtn:`A) 19″ dianteira e 17″ traseira`,resposta:""},
{textobtn:`B) 21″ dianteira e 17″ traseira`,resposta:""},
{textobtn:`C) 17″ dianteira e 17″ traseira`,resposta:""},
{textobtn:`D) 21″ dianteira e 19″ traseira`,resposta:"v"},
 ]   
},

];
/*
const paragrafo 
const youtube 
const btns
*/
/*proxima();
  

function proxima(){
    reset();
    paragrafo.innerHTML=perguntas[contador].questionamento; 
    youtube.href=perguntas[contador].link; 
    
    var index = 0; 
    btns.forEach((item)=>{
        item.innerHTML=perguntas[contador].opcoes[index].textobtn;
        item.dataset.respostadata=perguntas[contador].opcoes[index].resposta;
        item.addEventListener('click',btnclicado);
        index++;
    });
    contador++;


}


function volta(){
    reset();
    paragrafo.innerHTML=perguntas[contador].questionamento; 
    youtube.href=perguntas[contador].link; 
    
    var index = 0; 
    btns.forEach((item)=>{
        item.innerHTML=perguntas[contador].opcoes[index].textobtn;
        item.dataset.respostadata=perguntas[contador].opcoes[index].resposta;
        item.addEventListener('click',btnclicado);
        index++;
    });
    contador--;


}

function reset(){
   paragrafo.innerHTML='';
   youtube.href='';  
   var index = 0;

    btns.forEach((item)=>{
    item.innerHTML='';
    item.dataset.respostadata='';
    item.classList.remove("correto");   
    item.classList.remove("incorreto"); 
    item.disabled = false;
    
    index++;
    console.log(index); 
    console.log(item);
    });
   
}

function btnclicado(e){
var btclicado = event.target;
var idclicado = event.target.id; 
if(btclicado.dataset.respostadata=="v"){
var correto = document.getElementById(idclicado).classList;
    correto.add("correto");
}else{
var correto = document.getElementById(idclicado).classList;
    correto.add("incorreto");
}
btns.forEach((item)=>{
if(item.dataset.respostadata=="v"){
    item.classList.add("correto");
}
item.disabled=true;
});
}

*/



