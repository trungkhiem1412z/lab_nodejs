const show_category = document.querySelector('.show-category');
const formcate = document.getElementById('form-cate');
const formcateedit = document.getElementById('form-cate-edit');

const url = 'http://localhost:5000/api/category';

class Category {
  constructor(url) {
    this.url = url;
  }

  async getCategory() {
    try {
      let response = await axios.get(`${this.url}`);
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
    } catch (error) {
      console.log(error);
    }
  }

  async addCategory() {
    const tenLoai = document.querySelector('#tenLoaiEdit');
    const anHien = document.querySelector('#anHien');

    const formdata = new FormData(formcateedit);
    formdata.append('tenLoai', tenLoai.value);
    formdata.append('anHien', anHien.value);
    try {
      const post = await axios.post(this.url, formdata, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Thành công');
    } catch (error) {
      console.log(error);
    }
  }

  async editCategory(cateId) {
    const tenLoai = document.querySelector('#tenLoai');
    const anHien = document.querySelector('#anHien');

    const formdata = new FormData(formcate);
    formdata.append('tenLoai', tenLoai.value);
    formdata.append('anHien', anHien.value);
    try {
      let response = await axios.get(`${this.url}/${cateId}`);
      let data = response.data;
      Array.from(data.result).forEach((item) => {
        const nameCategory = document.querySelector('#tenLoaiEdit');
        nameCategory.value = `${item.tenLoai}`;
      });
      try {
        const put = await axios.put(this.url, formdata, {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('Thành công');
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCategory(cateId) {
    const ques = confirm(`Bạn có chắc chắn xóa danh mục ID: ${cateId}?`);
    if (ques == false) return;
    try {
      const dlt = await axios.delete(`${this.url}/${cateId}`);
      console.log('Đã xoá');
    } catch (error) {
      console.log(error);
    }
  }
}

const category = new Category(url);
category.getCategory();
category.editCategory();

// Fix
formcate.addEventListener('submit', (item) => {
  item.preventDefault();
  category.addCategory();
});
