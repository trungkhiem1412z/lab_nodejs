// import { getCategory } from './navbar.js';
// import { book_cat } from './listbook.js';
// Category
const getCategory = async () => {
	let res = await axios.get('http://localhost:5000/api/category');
	return res;
};
getCategory().then((res) => {
	const show_category = document.querySelector('.navbar-nav');
	let arr = res.data;

	Array.from(arr.result).forEach((i) => {
		const item_category = `
            <li class="nav-item">
                <a class="nav-link" href="/cat?id=${i.id}">${i.tenLoai}</a>
            </li>
            `;
		show_category.innerHTML += item_category;
	});
});

// Lấy URL
const params = new URL(document.location).searchParams;
// Get ID
let cat_id = params.get('id');
// Book list
const book_cat = async () => {
	let response = await axios.get(`http://localhost:5000/api/category/${cat_id}`);
	return response;
};
book_cat().then((response) => {
	const show_book = document.querySelector('.showbook');
	let data = response.data;

	Array.from(data.result).forEach((i) => {
		const item_book = `
            <a class="nav-link" href="#">${i.tenSach}</a>
		`;
		show_book.innerHTML += item_book;
	});
});
