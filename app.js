let paragraph = [
    "Saylani Welfare International Trust is a non-government organization focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan. It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri."
    ,
    "The motto of Saylani Welfare International Trust is “Aao Dard Banteen” (Let's share sorrows)."
    ,
    "The organization believes in lighting up the lives of underprivileged people in different countries of the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark."
    ,
    "With an estimated monthly expenditure of Pakistani Rupees above 30 million, Saylani Trust provides food twice a day to more than 30,000 poor people through its 100 centers (generally known as Dastar-Khawan), most of them are serving in Karachi."
    ,
    "The primary aim of the Trust is to help the Beneficiaries by providing benefit and financial support to the needy and under distress."
    ,
    "The Roti Bank provides free meals to needy families in a simple walk-up kiosk along a main thoroughfare in Karachi After providing their identification details of family size (via birth certificates) and getting the Saylani Free Food Card the families can get 2 meals per day for a month<br>"
    ,
    "During the COVID-19 crisis, Saylani Welfare Trust provided free oxygen, food, rescue equipment and other supplies to hospitals and Covid-19 wards in the country.It also introduced mobile phone application and telephone service, where needy families can register themselves to get ration and other essential items<br>."
    ,
    "Arranging Marriages. Arranges minimum of Every month some 200 such girls are married by the help of Saylani Welfare TrustMedical CampsSadqa Bakra ServiceMass Training and Job Creation Program (New) Saylaniin corporation with Intel is starting a mass job training program with guarantee job placement. Only matriculates and Olevel students are allowed to appear in the program<br>"
    ,
    "Educational Help : Saylani Welfare Trust has established more than 100 educational institutes and primary schools to educate thousands of students free of charge.Providing the Poor with Two Meals a Day(SAYLANI KA DASTARKHAWAN) : Saylani Welfare Trust arranges food twice a day on many places of Karachi for the low income people<br>"
    ,
    "It should be noted that Allah who is in need of no one and nothing instills upon his men to give Qarz-e-Hasana because it is in mans nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting Muslims to spend their wealth in a certain way.<br>"
    ,
    "Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich<br>"
    ,
    "What is the revenue of Saylani?Saylani Welfares revenue is $26.8 Million What is Saylani Welfares SIC code? Saylani Welfares SIC 83,832 What is Saylani Welfares NAICS code?"
]





inputNumber = document.querySelector('.inputNumber')

submit = document.querySelector('.submit')

random = document.querySelector('.random')

    // console.log(random.textContent)

    // console.log(submit.classList)
    ;
submit.addEventListener('click', () => {
    let input = parseInt(inputNumber.value)
    let Random = Math.floor(Math.random() * paragraph.length)
    // console.log(Random)
    if (inputNumber.value == "" || input < 0 || input > paragraph.length )
        random.innerHTML = `<p>${paragraph[Random]}</p>`;
    else {
        let paraCopy = paragraph.slice(0 , input);
        let paraPaste = paraCopy.map((paragraph)=> `<p>${paragraph}`).join("")
        console.log(paraPaste)
        random.innerHTML = `<p class="random">${paraPaste}</p> <hr>`;
    }

})