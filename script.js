const dat=document.querySelector('#Task')
const submit=document.querySelector('.submit')
const un_list=document.querySelector('.un-list')
const un_list2=document.querySelector('.completed-list')

document.addEventListener("keydown", function (e) {
    if (e.code !== "Enter") return;
    if(dat.value==""){
        return
    }
    create_a_node()
    dat.value=''
})

submit.addEventListener('click',(e)=>{
    if(dat.value==""){
        return
    }
    create_a_node()
    dat.value=''
})

function create_a_node(){
    const li=document.createElement('li')
    li.className='li-item'
    li.innerText=dat.value
    const btn=document.createElement('button')
    btn.textContent='Mark as Done'
    btn.onclick = move_to_complete
    li.appendChild(btn)
    un_list.appendChild(li)
}

function populate(data){
    const lii=document.createElement('li')
    lii.className="completed"
    lii.textContent=data
    un_list2.appendChild(lii)
}
function move_to_complete(){
    let val=this.parentElement.firstChild.data
    const task_list=this.parentElement.parentElement
    const list_item=this.parentElement
    task_list.removeChild(list_item)
    populate(val)
}




























// function create_a_node(st,met){
//     const li=create(st,met)
//     const ull=document.querySelector('.un-list')
//     ull.appendChild(li)
//     addEvent()
//     return li;
// }
// function create(st,textt){
//     const li=document.createElement('li')
//     li.className='li-item'
//     const atag=document.createElement('a')
//     atag.setAttribute('href','#')
//     atag.className='cross'
//     const itag=document.createElement('button')
//     itag.innerText="Mark As Done"
//     itag.className='Done'
//     itag.onclick= addToCompleted
//     atag.appendChild(itag)
//     li.appendChild(document.createTextNode(st))
//     li.appendChild(atag)
//     return li
// }

// function addEvent(){
//     const item=document.querySelectorAll('.cross')
//     item.forEach(function(ite,index){
//         ite.addEventListener('click', function(e) {
//           const x=e.target.parentElement.parentElement.firstChild.data;
//           console.log(e.target.parentElement.parentElement)
//           e.target.parentElement.parentElement.remove()
//         })
//     })
// }

// function addToCompleted(){
//     const x=this.parentElement.parentElement.parentElement
//     const y=this.parentElement.parentElement.firstChild.data
//     const lii=create(y,"mark")
//     x.appendChild(lii)
// }
