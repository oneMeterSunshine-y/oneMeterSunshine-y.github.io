(function (Vue) {
	const Data = [
		{id:1,title:'吃饭',stat:true},
		{id:2,title:'睡觉',stat:false},
		{id:3,title:'看电影',stat:true}
	]
	var app = new Vue({
		el:'#todoList',
		data:{
			title:'TodoList',
			Data
		},
		methods:{
			addList(ev){
				let id = this.Data[this.Data.length - 1].id + 1;
				let title = ev.target.value;
				let stat = false;
				this.Data.push({id,title,stat});
				ev.target.value = '';
			},
			checkAll(ev){
				for ( let v in this.Data){
					this.Data[v].stat = ev.target.checked;
				}
			},
			removeList(k){
				this.Data.splice(k,1);
			},
			removeAll(){
				this.Data = this.Data.filter((v)=>!v.stat)
			}
		}
	})
})(Vue);
