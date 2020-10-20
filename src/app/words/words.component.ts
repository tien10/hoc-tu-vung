import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent implements OnInit {
  filterStatus = 'all';
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true },
  ];
  newEn = null;
  newVi = null;
  isShow = false;
  showStatus(memorized: boolean): any {
    const all = this.filterStatus === 'all';
    const remembered = this.filterStatus === 'remembered' && memorized;
    const forgot = this.filterStatus === 'forgot' && !memorized;
    return all || remembered || forgot;
  }
  add(): void {
    // console.log(this.newEn, this.newVi);
    if (this.newEn !== null && this.newVi !== null) {
      this.arrWords.unshift({
        id: this.arrWords.length + 1,
        en: this.newEn,
        vn: this.newVi,
        memorized: false,
      });
    }
    this.newEn = null;
    this.newVi = null;
    this.isShow = !this.isShow;
  }
  remove(id: number): void {
    // console.log('delete');
    const index = this.arrWords.findIndex((word) => word.id === id);
    this.arrWords.splice(index, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
