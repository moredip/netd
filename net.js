function main(){
  const DateTime = window.luxon.DateTime;

  const now = DateTime.local();
  const net15 = now.plus({days:15});
  const net30 = now.plus({days:30});

  const nowStr = now.toLocaleString(DateTime.DATE_MED);
  const net15Str = net15.toLocaleString(DateTime.DATE_MED);
  const net30Str = net30.toLocaleString(DateTime.DATE_MED);

  document.querySelector('#today').innerText=nowStr;
  document.querySelector('#net15').innerText=net15Str;
  document.querySelector('#net30').innerText=net30Str;
}

if( document.readyState != 'loading' ){
  main();
}else{
  window.addEventListener('DOMContentLoaded', main);
}

