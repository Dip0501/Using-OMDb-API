function searchBox(event) {
    const searchItem = event.target.value
    localStorage.setItem('searchItem', searchItem)
}

function onSearch () {
    window.location.href = `${window.location.origin}/Using-OMDb-API/movies.html`
}
