noticias = {
  "noticia1": {
    titulo: "A 3 SEMANAS DO CARNAVAL, BLOCOS JÁ TOMAM RUAS NO FIM DE SEMANA",
    descricao: "Os foliões que curtem o carnaval de rua terão várias opções de blocos já neste fim de semana. A partir desta sexta-feira (3), a folia começa a ocupar as ruas de vários bairros da cidade, com 16 blocos realizando os primeiros desfiles. Já na noite desta sexta, o Badalo de Santa Teresa fará a festa a partir das 19h, no Largo das Neves, enquanto o Independente do Morro do Pinto se concentra uma hora antes, na Rua Farnese. No sábado (4), o destaque fica por conta da tradicional Banda de Ipanema, que faz o lançamento da camiseta em um ensaio aberto na Praça General Osório, com concentração a partir das 15h. No domingo (5), o Bigode Esticado garante a animação dos foliões do Méier, às 18h, na Rua Dias da Cruz."
  }
  "noticia2": {
    titulo: "SOCIALITE HELOÍSA FAISSOL É ENCONTRADA MORTA NO RIO",
    descricao: "Socialite e funkeira Heloísa Worms Pinto, de 46 anos, mais conhecida como Heloísa Faissol, foi encontrada morta em Copacabana, no Rio de Janeiro, nesta quinta-feira (2). Segundo a Polícia Civil, o corpo de Heloísa foi encontrado durante a tarde, em um apartamento na Rua Sousa Lima. A perícia foi realizada no local e diligências estão em andamento para esclarecer todas as circunstâncias do ocorrido. Um procedimento foi instaurado na 13ª DP (Ipanema). O corpo foi encaminhado ao Instituto Médico Legal (IML) para determinar a causa da morte. De acordo com informações da Polícia Civil, a hipótese de homicídio não foi descartada, mas a hipótese mais provável é suicídio."
  }
  "noticia3": {
    titulo: "SOLDADO DISPARA EM SUSPEITO NO MUSEU DO LOUVRE",
    descricao: "Um soldado francês disparou contra um homem armado com um facão no Carrousel do Louvre, que é o centro comercial subterrâneo do museu, em Paris, na manhã desta sexta-feira (3). O homem chegou a agredir um militar, o que o governo francês chamou de um visível ataque de caráter terrorista. Um grupo de quatro militares da Operação Sentinelle fazia a vigilância do museu quando um homem foi na direção deles gritando Allahu Akbar (Alá é grande, em árabe), segundo a polícia francesa. Um dos militares ficou ferido no couro cabeludo e outro reagiu. Foram dados cinco disparos contra o homem armado. O suspeito foi atingido na barriga e ficou gravemente ferido, mas permaneceu consciente, de acordo com o jornal francês Le Monde. O jornal Le Monde diz ainda que ele levava dois facões, mas não tinha explosivos. Um segundo suspeito foi detido, mas a polícia ainda não sabe se ele tem alguma relação com o ataque. Sua identidade ainda não é conhecida. Fontes do governo do Egito disseram à agência de notícias Reuters, sob condição de anonimato, que o ministro do Interior recebeu uma confirmação da embaixada do país em Paris de que o suspeito seria egípcio. O presidente François Hollande, que participa nesta sexta do encontro dos chefes de estado da União Europeia, em Malta, parabenizou a atuação dos militares, e declarou que a natureza terrorista [da operação] deixa poucas dúvidas". "A ameaça [terrorista] segue, mas temos que enfrentá-la, afirmou, segundo a France Presse. O primeiro-ministro francês, Bernard Cazeneuve, disse que a agressão no Museu do Louvre é um visível ataque de caráter terrorista. Para o Ministério do Interior, o incidente é considerado grave."
  }
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function exibeDetalhes(item) {
  document.getElementById("")
}
