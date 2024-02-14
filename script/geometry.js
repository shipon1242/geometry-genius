function calculate(){
    const baseText=document.getElementById('base')
    
   
    const baseValue= parseFloat(baseText.value) 

    const hightext=document.getElementById('hight')
    const hightValue=parseFloat(hightext.value)
    
    const AreaText=document.getElementById('area')
    AreaText.innerText=(0.5*baseValue*hightValue).toFixed(2)
  
   baseText.value='';
   hightext.value=''


}
// rectangle
function calculateRectangle(){
   const widthText=document.getElementById('width')
   const widthValue=parseFloat(widthText.value)
   const lengthText=document.getElementById('length')
   const lengthValue=parseFloat(lengthText.value) 
   const AreaText=widthValue*lengthValue
   const area=document.getElementById('rectangleArea')
   area.innerText=AreaText.toFixed(2)
   widthText.value=''
  lengthText.value=''
   
   
}
// Parallelogram
function calculateParallelogram(){
   const ParallelogramWidth=getInputId('parallelogramWidth')
   const parallelogramHeight=getInputId('parallelogramHeight')
   const area=ParallelogramWidth*parallelogramHeight
   const areaValue=setArea('ParallelogramArea',area)
   ParallelogramWidth.value=''
   
}
function getInputId(inputField){
   const inputFieldText=document.getElementById(inputField)
   const inputFieldValue=inputFieldText.value
 const inputNumberValue=parseFloat(inputFieldValue)
 inputFieldText.value=''
 return inputNumberValue
   

}
function setArea(setValueId,area){
   const fieldArea=document.getElementById(setValueId)
   fieldArea.innerText=area.toFixed(2)
   return fieldArea


}
// rhombus

function calculateRhombus(){
   const Dihedral_1 =getInputId('Dihedral-1')
   const Dihedral_2=getInputId('Dihedral-2')
   const area=Dihedral_1*Dihedral_2
   const areaValue=setArea('RhombusArea',area)
}
// Pentagon
function calculatePentagon(){
   const p=getInputId('p')
   const b=getInputId('b')
   const area=0.5*p*b
   const areaValue=setArea('PentagonArea',area)
}
// Ellipse
function  calculateEllipse(){
   const a=getInputId('a')
   const big=getInputId('big')
   const area=3.1416*a*big
   const areaValue=setArea('EllipseArea',area)
}

   const changeBackground=document.getElementById('pentagonDiv')
   
   changeBackground.addEventListener('mouseenter',function(){
      changeBackground.style.backgroundColor='red'
   })

