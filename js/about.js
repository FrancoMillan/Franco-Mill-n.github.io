const description = document.getElementById("description")
const nameId = document.getElementById("name")
const name_descriptionID = document.getElementById("name_description")

initName = () => {
    transition_ = 25

    name_ = `@FrancoMillán`
    nameToDOM = "<h1>"

    for (let i = 0; i < name_.length; i++) {
        setTimeout(() => {
            nameToDOM += name_[i]
            nameId.innerHTML = nameToDOM
        }, transition_ * 3 * i);
    }

    description_ = `Frontend Dev. Rosario, Argentina<`
    descriptionToDOM = "<h6>"

    for (let i = 0; i < description_.length; i++) {
        setTimeout(() => {
            if (description_[i] == "<") {
                descriptionToDOM += `<h1 class="name-icon">🌎`
                name_descriptionID.innerHTML = descriptionToDOM
            } else {
                descriptionToDOM += description_[i]
                name_descriptionID.innerHTML = descriptionToDOM
            }
        }, transition_ * i);
    }
}

initName()


englishDescription = false

const translator = () => {
    englishDescription = !englishDescription
    if (englishDescription) {
        description.innerHTML = `
            <button id="translator" onclick="translator()"><h1 class="expand">T</h1></button>
            <h3>Hola mi nombre es Franco Nicolás Millán 👋</h4>
                <h3>Me considero una persona proactiva que siempre tiene ganas
                    de aprender, trabajar en equipo y aportar soluciones a los
                    problemas pertinentes. Además, me destaco por mi continuo
                    perfeccionamiento profesional, dedicacion y perseverancia
                    para lograr los objetivos que me propongo.
                </h3>
                <h3> Estoy interesado en la programación fronted y me especializo en Html, Css, JavaScript, Bootstrap, React. <br>
                     Manejo de motores de base de datos como PostgreSQL, MySQL, además tengo conocimientos en C#, Php y NodeJs.
                </h3>
        `
    } else {
        description.innerHTML = `
            <button id="translator" onclick="translator()"><h1 class="expand">T</h1></button>
            <h3>Hello my name is Franco Nicolás Millán 👋</h4>
                <h3>I consider myself a proactive person who always wants to
                    to learn, work as a team and provide solutions to
                    relevant issues. In addition, I stand out for my continuous
                    professional improvement, dedication and perseverance
                    to achieve the goals that I set myself.
                </h3>
                <h3> I am interested in fronted programming and I specialize in Html, Css, JavaScript, Bootstrap, React. <br>
                     Management of database engines such as PostgreSQL, MySQL, I also have knowledge in C#, Php and NodeJs.
                </h3>
        `
    }

}