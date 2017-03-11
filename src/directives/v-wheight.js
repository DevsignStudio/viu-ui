
export default (el, binding) => {
    if (!binding.value) {
        binding.value = 100;
    }
    el.style.height = (window.innerHeight * binding.value / 100) + 'px';
};
