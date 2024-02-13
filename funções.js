// Crie uma função para verificar se um valor é Truthy
function verificar(teste){
return !!teste
}
console.log(verificar())

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(isso){
  return isso * 4
}
console.log(quadrado(20))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomecompleto(){
  const nome = "miguel"
  const sobrenome = "sanglard" 
  return nome + " " + sobrenome
}
console.log(nomecompleto())
// Crie uma função que verifica se um número é par
function par (verificarr){
 var modulo = verificar % 2;
 if (modulo ===0){
  return true;}
  else {
    return false
  }
 }

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTipo(dado){
  return typeof(dado)
}
console.log(verificarTipo(1))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log("miguel sanglard")
})

// Corrija o erro abaixo



var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
