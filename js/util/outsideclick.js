export default function outsideclick(element, events, callback) {
    const html = document.documentElement;
    const attrbiute = "data-outside";

    function handleoutside(e) {
        const target = e.target;

        if(!element.contains(target)) {
            events.forEach(event => {
                html.removeEventListener(event, handleoutside);
            });

            element.removeAttribute(attrbiute);
            callback();
        }
    }

    if(!element.hasAttribute(attrbiute)) {
        events.forEach(event => {
            setTimeout(() => {
                html.addEventListener(event, handleoutside);
            });
            element.setAttribute(attrbiute, "");
        });
    }
}