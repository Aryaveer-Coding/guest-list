names_of_people = [];

function submit()
{
    var guest_name = document.getElementById("name_text_input");
    names_of_people.push(guest_name);
    console.log(guest_name);

    console.log(names_of_people);
    var length_of_list = names_of_people.length;
    console.log(length_of_list);
    
    document.getElementById("display_name").innerHTML = names_of_people.toString();
}

