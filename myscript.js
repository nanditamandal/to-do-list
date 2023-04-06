// const form = document.querySelector('form');
// 		// const input = document.querySelector('input');
		// const ul = document.querySelector('ul');
        let item=document.getElementById('item');
        let time=document.getElementById('time');
		let index =document.getElementById('number');
	
		let number=1;

        function myFunction(){

			
			const li = document.createElement('li');
            	// e.preventDefault();

			if (item.value.trim() === '') {
				alert('Please enter a task...');
				return;
			}
            if (time.value.trim() === '') {
				alert('Please enter time ....');
				return;
			}
			if (index.value.trim() > 0) {


					const myList = document.getElementById('task-list');
					// console.log( myList.children.length);

					for (let i = 0; i < myList.children.length; i++) {
						const listItem = myList.children[i]; //li
						const indexNumber = listItem.children[0].textContent;
						if (indexNumber === index.value) {
							let editList=listItem;
							listItem.querySelector('.todo-item-text').innerHTML=item.value;
							listItem.querySelector('.todo-item-time').innerHTML=time.value;

							item.value='';
							time.value = '';
						//console.log('Found:', listItem);
						break;
						}
					}
				return;
			}

            li.innerHTML = `
			<p class="todo-item-number">${number}</p>
			<p class="todo-item-text">${item.value}</p>
			<p class="todo-item-time">${time.value}</p>
			<p><button class="delete-button">Delete</button>
			<button class="update-button">Update</button></p>
			`;
         
			ul.appendChild(li);
			console.log(li);

            item.value='';
			time.value = '';
			number++;
            
       

        }
		
		ul.addEventListener('click', (e) => {
			if (e.target.classList.contains('delete-button')) {
				// e.target.parentElement.remove();
				e.target.parentElement.parentElement.remove();
			}
		});
       

        ul.addEventListener('click', (e) => {
			if (e.target.classList.contains('update-button')) {
				const parentList= e.target.parentElement.parentElement;
				const todoItem=parentList.querySelector('.todo-item-text').value;
				const todoTime=parentList.querySelector('.todo-item-time').value;
				const number=parentList.querySelector('.todo-item-number').value;
              
				
                item.value=parentList.querySelector('.todo-item-text').innerHTML;
				time.value=parentList.querySelector('.todo-item-time').innerHTML;
				index.value=parentList.querySelector('.todo-item-number').innerHTML;


            }
		});