const botao_next = document.querySelectorAll('#btn-next')
const numero = document.querySelectorAll('#step')
const step = document.querySelectorAll('#area-step')

const input = document.querySelectorAll('#input')
const text_required = document.querySelectorAll('#text-required')

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegex = /^[0-9\-\+]{9,15}$/

const botao_switch = document.getElementById('btn-switch')
const switch_type = document.querySelectorAll('#btn-switch-text')
const botao_back = document.querySelectorAll('#btn-back')
const card_selecao = document.querySelectorAll('#selecao')

const arcade_month = document.getElementById('arcade-month')
const advanced_month = document.getElementById('advanced-month')
const pro_month = document.getElementById('pro-month')
const arcade_year = document.getElementById('arcade-year')
const advanced_year = document.getElementById('advanced-year')
const pro_year = document.getElementById('pro-year')

const online_month = document.getElementById('inp-online')
const storage_month = document.getElementById('inp-storage')
const custom_month = document.getElementById('inp-custom')
const online_year = document.getElementById('inp-online-yr')
const storage_year = document.getElementById('inp-storage-yr')
const custom_year = document.getElementById('inp-custom-yr')

const titulo_plano = document.querySelector('.titulo-plano')
const preco_plano = document.querySelector('.preco-plano')
const add_plano = document.querySelectorAll('#add')
const titulo_add = document.querySelectorAll('.add-plano')
const preco_add = document.querySelectorAll('.preco-add')
const total_text = document.querySelector('.text-total')
const preco_total = document.querySelector('.preco-total')

const botao_select = document.querySelectorAll('.inp-select')
const area_select = document.querySelectorAll('#select')
const selects = document.querySelectorAll('#selects-stade')

const botao_change = document.querySelector('.btn-change')

let valores_select = 0
let valor_adds = 0
let valor_total = 0

function reset() {
    valor_adds = 0
    valores_select = 0
    online_month.checked = false
    storage_month.checked = false
    custom_month.checked = false
    online_year.checked = false
    storage_year.checked = false
    custom_year.checked = false
    for (let i = 0; i < 6; i++ ){
        if (area_select[i].classList.contains('select-conteudo-ativo')){
            area_select[i].classList.remove('select-conteudo-ativo')
            area_select[i].classList.add('select-conteudo')
        }
        console.log(i)
    }
    for (let i = 0; i < 3; i++){
        if (add_plano[i].classList.contains('add')){
            add_plano[i].classList.remove('add')
            add_plano[i].classList.add('desativo')
        }
    }
}
function resetPersonalizado() {
    valor_adds = 0
    online_month.checked = false
    storage_month.checked = false
    custom_month.checked = false
    online_year.checked = false
    storage_year.checked = false
    custom_year.checked = false
    for (let i = 0; i < 6; i++ ){
        if (area_select[i].classList.contains('select-conteudo-ativo')){
            area_select[i].classList.remove('select-conteudo-ativo')
            area_select[i].classList.add('select-conteudo')
        }
    }
    for (let i = 0; i < 3; i++ ){
        if (add_plano[i].classList.contains('add')){
            add_plano[i].classList.remove('add')
            add_plano[i].classList.add('desativo')
        }
    }
}
function trocaNumero(numero_1, numero_2) {
    if (!numero[numero_1].classList.add('numero-desativado') & !numero[numero_2].classList.add('numero-ativado')){
        numero[numero_1].classList.remove('numero-ativado')
        numero[numero_1].classList.add('numero-desativado')
        numero[numero_2].classList.remove('numero-desativado')
        numero[numero_2].classList.add('numero-ativado')
    }
}
function trocaClasse(item_1, item_2, class_1, class_2, class_3 ) {
    if(!item_1.classList.add(class_1) & !item_2.classList.add(class_2)){
        item_1.classList.remove(class_3)
        item_1.classList.add(class_1)
        item_2.classList.remove(class_1)
        item_2.classList.add(class_2)
    }
}

botao_next[0].addEventListener('click', () =>{
    if (input[0].value.length == 0){
        input[0].classList.remove('inp-form')
        input[0].classList.add('inp-required')
        text_required[0].classList.remove('desativo')
        text_required[0].classList.add('text-required-ativo')
        return
    }
    if (emailRegex.test(input[1].value) === false){
        input[1].classList.remove('inp-form')
        input[1].classList.add('inp-required')
        text_required[1].classList.remove('desativo')
        text_required[1].classList.add('text-required-ativo')
        return
    }
    if (phoneRegex.test(input[2].value) === false){
        input[2].classList.remove('inp-form')
        input[2].classList.add('inp-required')
        text_required[2].classList.remove('desativo')
        text_required[2].classList.add('text-required-ativo')
        return
    }

    trocaNumero(0, 1)

    trocaClasse(step[0], step[1], 'desativo', 'area-step-2-ativo', 'area-step-1-ativo')
    
})
botao_next[1].addEventListener('click', () =>{
    if(arcade_month.checked | advanced_month.checked | pro_month.checked | arcade_year.checked | advanced_year.checked | pro_year.checked){
        
        trocaNumero(1, 2)

        trocaClasse(step[1], step[2], 'desativo','area-step-3-ativo', 'area-step-2-ativo')

        
        if(arcade_month.checked | advanced_month.checked | pro_month.checked){
            selects[0].classList.remove('desativo')
            selects[0].classList.add('selects')
            selects[1].classList.remove('selects')
            selects[1].classList.add('desativo')
            if(arcade_month.checked){
                valores_select = 9
                titulo_plano.innerText = "Arcade (Monthly)"
                preco_plano.innerText= '+' + valores_select + '/mo'
            }
            if(advanced_month.checked){
                valores_select = 12
                titulo_plano.innerText = "Advanced (Monthly)"
                preco_plano.innerText= '+' + valores_select + '/mo'
            }
            if(pro_month.checked){
                valores_select = 15
                titulo_plano.innerText = "Pro (Monthly)"
                preco_plano.innerText= '+' + valores_select + '/mo'
            }
            total_text.innerText = 'Total(per month)'
        }else{
            selects[0].classList.remove('selects')
            selects[0].classList.add('desativo')
            selects[1].classList.remove('desativo')
            selects[1].classList.add('selects')
            if(arcade_year.checked){
                valores_select = 90
                titulo_plano.innerText = "Arcade (Yearly)"
                preco_plano.innerText= '+' + valores_select + '/yr'
                
            }
            if(advanced_year.checked){
                valores_select = 120
                titulo_plano.innerText = "Advanced (Yearly)"
                preco_plano.innerText= '+' + valores_select + '/yr'
            }
            if(pro_year.checked){
                valores_select = 150
                titulo_plano.innerText = "Pro (Yearly)"
                preco_plano.innerText= '+' + valores_select + '/yr'
                
            }
            total_text.innerText = 'Total(per year)'
        }
    }
})
botao_next[2].addEventListener('click', () =>{
    
    trocaNumero(2, 3)

    trocaClasse(step[2], step[3], 'desativo','area-step-4-ativo', 'area-step-3-ativo')

    if(online_month.checked){
        valor_adds += 1
        add_plano[0].classList.add('add')
        titulo_add[0].innerText = 'Online service'
        preco_add[0].innerText = '+1/mo'
    }
    if(storage_month.checked){
        valor_adds += 2
        add_plano[1].classList.add('add')
        titulo_add[1].innerText = 'Larger storage'
        preco_add[1].innerText = '+2/mo'
    }
    if(custom_month.checked){
        valor_adds += 2
        add_plano[2].classList.add('add')
        titulo_add[2].innerText = 'Customizable Profile'
        preco_add[2].innerText = '+2/mo'
    }
    if(online_year.checked){
        valor_adds += 10
        add_plano[0].classList.add('add')
        titulo_add[0].innerText = 'Online service'
        preco_add[0].innerText = '+10/yr'
    }
    if(storage_year.checked){
        add_plano[1].classList.add('add')
        titulo_add[1].innerText = 'Larger storage'
        preco_add[1].innerText = '+20/yr'
        valor_adds += 20
    }
    if(custom_year.checked){
        add_plano[2].classList.add('add')
        titulo_add[2].innerText = 'Customizable Profile'
        preco_add[2].innerText = '+20/yr'
        valor_adds += 20
    }
    if (valor_adds + valores_select < 50){
        valor_total = valor_adds + valores_select
        preco_total.innerText = '+' + valor_total + '/mo'
    }else{
        valor_total = valor_adds + valores_select
        preco_total.innerText = '+' + valor_total + '/yr'
    }
})
botao_next[3].addEventListener('click', () =>{

    trocaClasse(step[3], step[4], 'desativo','area-step-5-ativo', 'area-step-4-ativo')
    
    
})


botao_switch.addEventListener('click', () => {
    if (!switch_type[0].classList.contains('btn-switch-desativo') & !switch_type[1].classList.contains('btn-switch-ativo')){
        switch_type[0].classList.remove('btn-switch-ativo')
        switch_type[0].classList.add('btn-switch-desativo')
        switch_type[1].classList.remove('btn-switch-desativo')
        switch_type[1].classList.add('btn-switch-ativo')
        card_selecao[1].classList.remove('desativo')
        card_selecao[1].classList.add('selecao')
        card_selecao[0].classList.remove('selecao')
        card_selecao[0].classList.add('desativo')
    }else{
        switch_type[1].classList.remove('btn-switch-ativo')
        switch_type[1].classList.add('btn-switch-desativo')
        switch_type[0].classList.remove('btn-switch-desativo')
        switch_type[0].classList.add('btn-switch-ativo')
        card_selecao[0].classList.remove('desativo')
        card_selecao[0].classList.add('selecao')
        card_selecao[1].classList.remove('selecao')
        card_selecao[1].classList.add('desativo')
    }

    
})

botao_back[0].addEventListener('click', () => {
    if (!numero[0].classList.add('numero-ativado') & !numero[1].classList.add('numero-desativado')){
        numero[0].classList.remove('numero-desativado')
        numero[0].classList.add('numero-ativado')
        numero[1].classList.remove('numero-ativado')
        numero[1].classList.add('numero-desativado')
    }
    if(!step[0].classList.add('area-step-1-ativo') & !step[1].classList.add('desativo')){
        step[0].classList.remove('desativo')
        step[0].classList.add('area-step-1-ativo')
        step[1].classList.remove('area-step-2-ativo')
        step[1].classList.add('desativo')
    }
})
botao_back[1].addEventListener('click', () => {
    if (!numero[1].classList.add('numero-ativado') & !numero[2].classList.add('numero-desativado')){
        numero[1].classList.remove('numero-desativado')
        numero[1].classList.add('numero-ativado')
        numero[2].classList.remove('numero-ativado')
        numero[2].classList.add('numero-desativado')
    }
    if(!step[1].classList.add('area-step-2-ativo') & !step[2].classList.add('desativo')){
        step[1].classList.remove('desativo')
        step[1].classList.add('area-step-2-ativo')
        step[2].classList.remove('area-step-3-ativo')
        step[2].classList.add('desativo')
    }
    reset()
    
})
botao_back[2].addEventListener('click', () => {
    if (!numero[2].classList.add('numero-ativado') & !numero[3].classList.add('numero-desativado')){
        numero[2].classList.remove('numero-desativado')
        numero[2].classList.add('numero-ativado')
        numero[3].classList.remove('numero-ativado')
        numero[3].classList.add('numero-desativado')
    }
    if(!step[2].classList.add('area-step-3-ativo') & !step[3].classList.add('desativo')){
        step[2].classList.remove('desativo')
        step[2].classList.add('area-step-3-ativo')
        step[3].classList.remove('area-step-4-ativo')
        step[3].classList.add('desativo')
    }
    resetPersonalizado()
})

botao_select[0].addEventListener('click', () => {
    if (!area_select[0].classList.contains('select-conteudo-ativo')){
        area_select[0].classList.remove('select-conteudo')
        area_select[0].classList.add('select-conteudo-ativo')
    }else{
        area_select[0].classList.remove('select-conteudo-ativo')
        area_select[0].classList.add('select-conteudo')
    }
})
botao_select[1].addEventListener('click', () => {
    if (!area_select[1].classList.contains('select-conteudo-ativo')){
        area_select[1].classList.remove('select-conteudo')
        area_select[1].classList.add('select-conteudo-ativo')
    }else{
        area_select[1].classList.remove('select-conteudo-ativo')
        area_select[1].classList.add('select-conteudo')
    }
})
botao_select[2].addEventListener('click', () => {
    if (!area_select[2].classList.contains('select-conteudo-ativo')){
        area_select[2].classList.remove('select-conteudo')
        area_select[2].classList.add('select-conteudo-ativo')
    }else{
        area_select[2].classList.remove('select-conteudo-ativo')
        area_select[2].classList.add('select-conteudo')
    }
})
botao_select[3].addEventListener('click', () => {
    if (!area_select[3].classList.contains('select-conteudo-ativo')){
        area_select[3].classList.remove('select-conteudo')
        area_select[3].classList.add('select-conteudo-ativo')
    }else{
        area_select[3].classList.remove('select-conteudo-ativo')
        area_select[3].classList.add('select-conteudo')
    }
})
botao_select[4].addEventListener('click', () => {
    if (!area_select[4].classList.contains('select-conteudo-ativo')){
        area_select[4].classList.remove('select-conteudo')
        area_select[4].classList.add('select-conteudo-ativo')
    }else{
        area_select[4].classList.remove('select-conteudo-ativo')
        area_select[4].classList.add('select-conteudo')
    }
})
botao_select[5].addEventListener('click', () => {
    if (!area_select[5].classList.contains('select-conteudo-ativo')){
        area_select[5].classList.remove('select-conteudo')
        area_select[5].classList.add('select-conteudo-ativo')
    }else{
        area_select[5].classList.remove('select-conteudo-ativo')
        area_select[5].classList.add('select-conteudo')
    }
})

botao_change.addEventListener('click', () => {
    
    trocaNumero(3, 1)

    trocaClasse(step[3], step[1], 'desativo','area-step-2-ativo', 'area-step-4-ativo')

    reset()
})