const input = Array.from(document.getElementsByTagName('input'));
for (let checked of input) {
  checked.addEventListener('click', function(e) {
    if (this.closest('ul.interests_active') == null) {
        for (let iter of this.closest('li.interest').getElementsByTagName('input')) {
            if (e.target.checked == false) {
                iter.checked = false;
            } else {
                iter.checked = true;
            }
        }
    }
  })
}