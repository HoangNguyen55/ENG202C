// wrap every div in a wrapper div so that every div is the size of the screen
{
  const ele = document.querySelectorAll('div.body');

  for (let i = 0, n=ele.length; i < n; i++) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    ele[i].parentNode.insertBefore(wrapper, ele[i]);
    wrapper.appendChild(ele[i]);
  }
}
//

// TOC generator
{
  const ele = document.querySelectorAll('div.body');
  const toc = document.querySelector('#dropdown-menu');
  for (let i = 0, n=ele.length; i < n; i++) {
    const id = ele[i].id;
    const text = ele[i].querySelector('h2').textContent;
    const ref = document.createElement('a')
    ref.textContent = text;
    ref.href = `#${id}`;
    toc.appendChild(ref);
  }
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  console.log(document.documentElement.style.getPropertyValue('--scroll'));
}, false);

