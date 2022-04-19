setInterval(() => {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outobro", "Novembro", "Dezembro"
    ];
    let date = new Date();
    let m = date.getMonth() < 12 ? date.getMonth() + 1 : 1;
    console.log(monthNames[m -1]);
})