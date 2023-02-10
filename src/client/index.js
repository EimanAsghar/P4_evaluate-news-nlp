import { checkURL } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

window.addEventListener('DOMContentLoaded', ()=> {
    const buttonsubmit = document.getElementById('button-submit')
    buttonsubmit.addEventListener('click', (event)=>{
        handleSubmit(event)
    })
})

export{handleSubmit}
export{checkURL}
