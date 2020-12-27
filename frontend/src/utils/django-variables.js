function _getSingle(id) {
  if (!document.querySelector(`#${id}`)) {
    console.error(`Selector #${id} could not be found. Please check your django templates.`);
    console.error(`
      You are probably missing something like {{ value|json_script:'${id}' }}
      in your django template.`
    );
    return "";
  }
  return document.querySelector(`#${id}`).textContent.replace("\"", "");
}

function get(...args) {
  let obj = {};
  args.forEach((id) => {
    obj[id] = _getSingle(id)
  })
  return obj;
}

export {
  get
}
