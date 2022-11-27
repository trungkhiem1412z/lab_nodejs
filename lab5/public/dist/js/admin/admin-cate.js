const show_category = document.querySelector('.show-category');
const formcate = document.getElementById('form-cate');

const url = 'http://localhost:5000/api/category';

class Category {
	constructor(url) {
		this.url = url;
	}
	getCategory() {
		axios
			.get(`${this.url}`)
			.then(function (response) {
				let data = response.data;
				Array.from(data.result).forEach((item) => {
					const item_category = `
						<div class="d-flex justify-content-between mb-2 p-2 rounded border shadow-sm">
							<div class="d-flex align-items-center">
								<span>${item.tenLoai}</span>
							</div>
							<div>
								<button onclick="category.editCategory(${item.id});" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editCategory">
									<ion-icon name="pencil-outline"></ion-icon>
								</button>
								<button onclick="category.deleteCategory(${item.id});" type="button" class="btn btn-danger">
									<ion-icon name="trash-outline"></ion-icon>
								</button>
							</div>
						</div>
            		`;
					show_category.innerHTML += item_category;
				});
			})
			.catch(function (error) {
				show_category.innerHTML = `
					<span> Không tìm thấy dữ liệu! </span>
				`;
				console.log(error);
			});
	}

	addCategory() {
		const tenLoai = document.querySelector('#tenLoai');
		const anHien = document.querySelector('#anHien');

		const formdata = new FormData(formcate);
		formdata.append('tenLoai', tenLoai.value);
		formdata.append('anHien', anHien.value);

		axios
			.post(this.url, formdata, {
				headers: { 'Content-Type': 'application/json' },
			})
			.then(function (res) {
				console.log('Thành công!');
			})
			.catch(function (err) {
				console.log('Thất bại!');
			});
		location.reload();
	}

	editCategory(cateId) {
		axios.get(`${this.url}`).then(function (response) {
			let data = response.data;
			Array.from(data.result).forEach((item) => {
				const item_category = `
						<div class="d-flex justify-content-between mb-2 p-2 rounded border shadow-sm">
							<div class="d-flex align-items-center">
								<span>${item.tenLoai}</span>
							</div>
							<div>
								<button onclick="category.editCategory(${item.id});" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editCategory">
									<ion-icon name="pencil-outline"></ion-icon>
								</button>
								<button onclick="category.deleteCategory(${item.id});" type="button" class="btn btn-danger">
									<ion-icon name="trash-outline"></ion-icon>
								</button>
							</div>
						</div>
            		`;
				show_category.innerHTML += item_category;
			});
		});
	}

	deleteCategory(cateId) {
		const ques = confirm(`Bạn có chắc chắn xóa danh mục ID: ${cateId}?`);
		if (ques == false) return;
		axios
			.delete(`${this.url}/${cateId}`)
			.then(function (response) {
				alert('Đã xóa!');
			})
			.catch(function (error) {
				alert('Xoá thất bại!');
			});
		location.reload();
	}
}

const category = new Category(url);
category.getCategory();

// Fix
formcate.addEventListener('submit', (item) => {
	item.preventDefault();
	category.addCategory();
});
