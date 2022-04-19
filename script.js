setInterval(() => {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outobro", "Novembro", "Dezembro"
    ];
    const weekdayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let date = new Date();
    
    let m = date.getMonth();
    month = monthNames[m]
    document.querySelector('.month').innerHTML = month;

    let wd = date.getDay();
    let weekDay = weekdayNames[wd];
	document.querySelector('.week-day').innerHTML = weekDay;

    let day = date.getDate();
    document.querySelector('.day').innerHTML = day;

    let year = date.getFullYear();
    document.querySelector('.year').innerHTML = year;
})