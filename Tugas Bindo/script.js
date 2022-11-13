const body = document.querySelector("body"),
	sidebar = body.querySelector(".sidebar"),
	toggle = body.querySelector(".toggle"),

	searchBtn = body.querySelector(".search-box");


	toggle.addEventListener("click", () =>{
		sidebar.classList.toggle("close");
	});
	
	const list = document.querySelectorAll('.list');
		function activelink(){
			list.forEach((item) =>
			item.classList.remove('active'));
			this.classList.add('active');
		}
		list.forEach((item) =>
		item.addEventListener('click',activelink));