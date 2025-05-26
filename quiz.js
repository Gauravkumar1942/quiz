function st()


{

    showScore();

}


const questions = [{
        question: "Which river is known as the Ganga of the South in India?",
        answers: [

            { text: "Godavari", correct: true },
            { text: "Krishna", correct: false },
            { text: "Cauvery", correct: false },
            { text: "Ravi", correct: false },

        ]
    },
    {
        question: "How many members are there in the Rajya Sabha, the upper house of Parliament?",
        answers: [

            { text: "200", correct: false },
            { text: "300", correct: false },
            { text: "245", correct: true },
            { text: "320", correct: false },

        ]
    },
    {
        question: "Who is the presiding officer of the Lok Sabha, the lower house of Parliament?",
        answers: [

            { text: "Prime Minister", correct: false },
            { text: "Speaker", correct: true },
            { text: "President", correct: false },
            { text: "Chief Justice", correct: false },

        ]
    },
    {
        question: "What is the term of office for a Member of Parliament in the Rajya Sabha?",
        answers: [

            { text: "3 years", correct: false },
            { text: "4 years", correct: false },
            { text: "5 years", correct: false },
            { text: "6 years", correct: true },

        ]
    },
    {
        question: "How many members can be nominated to the Rajya Sabha by the President?",
        answers: [

            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false },

        ]
    },
    {
        question: "Who has  the Lok Sabha?",
        answers: [

            { text: "President", correct: true },
            { text: "Prime Ministe", correct: false },
            { text: "Speaker", correct: false },
            { text: "Chief Justice", correct: false },

        ]
    },
    {
        question: "What is the minimum age requirement to become a Member of Parliament in the Lok Sabha?",
        answers: [

            { text: "21 years", correct: false },
            { text: "25 years", correct: true },
            { text: "30 years", correct: false },
            { text: "35 years", correct: false },

        ]
    },
    {
        question: "How many members are there in the Lok Sabha?",
        answers: [

            { text: "525", correct: false },
            { text: "545", correct: true },
            { text: "565", correct: false },
            { text: "575", correct: false },

        ]
    },
    {
        question: "Who has the power to introduce a Money Bill in Parliament?",
        answers: [

            { text: "President", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Finance Minister", correct: true },
            { text: "Speaker", correct: false },

        ]
    },
    {
        question: "Who is the ex-officio Chairman of the Rajya Sabha?",
        answers: [

            { text: "President", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Vice President", correct: true },
            { text: "Chief Justice", correct: false },

        ]
    },
    {
        question: "Which house of Parliament has the power to introduce an impeachment motion against the President?",
        answers: [

            { text: "Lok Sabha", correct: true },
            { text: "Rajya Sabha", correct: false },
            { text: "Either house", correct: false },
            { text: "Supreme Court", correct: false },

        ]
    },
    {
        question: "Who has the power to remove the Vice President from office?",
        answers: [

            { text: "President", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Rajya Sabha", correct: true },
            { text: "Lok Sabha", correct: false },

        ]
    },
    {
        question: "How many Anglo-Indian members can be nominated to the Lok Sabha by the President?",
        answers: [

            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: false },

        ]
    },
    {
        question: "What is the minimum number of members required to constitute a quorum in either house of Parliament?",
        answers: [

            { text: "10%", correct: false },
            { text: "15%", correct: false },
            { text: "20%", correct: true },
            { text: "25%", correct: false },

        ]
    },
    {
        question: "Who has the power to create or abolish legislative councils in states?",
        answers: [

            { text: "Parliament", correct: true },
            { text: "President", correct: false },
            { text: "Governor", correct: false },
            { text: "Chief Minister", correct: false },

        ]
    },
    {
        question: "Which house of Parliament has the power to introduce an impeachment motion against a Judge of the Supreme Court?",
        answers: [

            { text: "Lok Sabha", correct: false },
            { text: "Rajya Sabha", correct: true },
            { text: "Either house", correct: false },
            { text: "Supreme Court", correct: false },

        ]
    },
    {
        question: "How many sessions of Parliament are held in a year?",
        answers: [

            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false },

        ]
    },
    {
        question: "Who has the power to create or abolish legislative assemblies in states?",
        answers: [

            { text: "Parliament", correct: false },
            { text: "President", correct: false },
            { text: "Governor", correct: true },
            { text: "Chief Minister", correct: false },

        ]
    },
    {
        question: "Who has the power to make rules for regulating the procedure of Parliament?",
        answers: [

            { text: "President", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Speaker", correct: true },
            { text: "Chief Justice", correct: false },

        ]
    },
    {
        question: "Who has the power to remove the Speaker of Lok Sabha from office?",
        answers: [

            { text: "President", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Rajya Sabha", correct: true },
            { text: "Lok Sabha", correct: false },

        ]
    },
    {
        question: "Which of the following is a vector quantity?",
        answers: [

            { text: "Speed", correct: false },
            { text: "Energy", correct: false },
            { text: "Distance", correct: false },
            { text: "Displacement", correct: true },

        ]
    },
    {
        question: "The phenomenon of total internal reflection is based on which principle?",
        answers: [

            { text: "Snell's law", correct: true },
            { text: "Huygens' principle", correct: false },
            { text: "Ohm's law", correct: false },
            { text: "Law of reflection", correct: false },

        ]
    },
    {
        question: "In which medium does sound travel the fastest?",
        answers: [

            { text: "Air", correct: false },
            { text: "Water", correct: false },
            { text: "Vacuum", correct: false },
            { text: "Steel", correct: true },

        ]
    },
    {
        question: "Which of the following is an example of a non-conservative force?",
        answers: [

            { text: "Gravity", correct: false },
            { text: "Friction", correct: true },
            { text: "Spring Force", correct: false },
            { text: "Electric Force", correct: false },

        ]
    },
    {
        question: "What happens to the resistance of a conductor when its temperature increases?",
        answers: [

            { text: "Increases", correct: true },
            { text: "Decreases", correct: false },
            { text: "Remains constant", correct: false },
            { text: "Depends on the material", correct: false },

        ]
    },
    {
        question: "Which of the following statements is true for a concave lens?",
        answers: [

            { text: "It always forms a virtual image", correct: false },
            { text: "It always forms a real image", correct: false },
            { text: "It has a positive focal length", correct: false },
            { text: "It diverges parallel rays of light", correct: true },

        ]
    },
    {
        question: "The velocity-time graph of an object moving with uniform acceleration is:",
        answers: [

            { text: "A stright line parallel to the time axis", correct: false },
            { text: "A stright line inclined to the time axis", correct: true },
            { text: "A curve ", correct: false },
            { text: "A horizontal line", correct: false },

        ]
    },
    {
        question: "Which of the following is not a fundamental unit in the International System of Units (SI)?",
        answers: [

            { text: "Ampere", correct: false },
            { text: "Kelvin", correct: false },
            { text: "Coulomb", correct: true },
            { text: "Newton", correct: false },

        ]
    },
    {
        question: "The resistance of a conductor depends on which of the following factors?",
        answers: [

            { text: "Length of the conductor", correct: false },
            { text: "Area of cross-section of the conductor", correct: false },
            { text: "Nature of the material", correct: false },
            { text: "All of the above", correct: true },

        ]
    },
    {
        question: "he frequency of a wave is inversely proportional to its:",
        answers: [

            { text: "Wavelength", correct: false },
            { text: "Amplitude", correct: false },
            { text: "Velocity", correct: false },
            { text: "Time Period", correct: true },

        ]
    },
    {
        question: "Which of the following is an example of an element?",
        answers: [

            { text: "Water", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Salt", correct: false },
            { text: "Sugar", correct: false },

        ]
    },
    {
        question: "The process of conversion of a solid directly into a gas is called:",
        answers: [

            { text: "Sublimation", correct: true },
            { text: "Evaporation", correct: false },
            { text: "Condesation", correct: false },
            { text: "Vaporization", correct: false },

        ]
    },
    {
        question: "Which of the following elements has the highest electronegativity?",
        answers: [

            { text: "Sodium", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: false },
            { text: "Flourine", correct: true },

        ]
    },
    {
        question: "The chemical formula H2O represents:?",
        answers: [

            { text: "Water", correct: true },
            { text: "Hydrogen Peroxide", correct: false },
            { text: "Hydrogen Oxide", correct: false },
            { text: "Carbon dioxide", correct: false },

        ]
    },
    {
        question: "Which of the following is a strong acid?",
        answers: [

            { text: "Acetic Acid", correct: false },
            { text: "Hydrochloric Acid", correct: true },
            { text: "Citric Acid", correct: false },
            { text: "carbonic Acid", correct: false },

        ]
    },
    {
        question: "The process of adding hydrogen to an unsaturated compound is called:",
        answers: [

            { text: "Oxidation", correct: false },
            { text: "Reduction", correct: true },
            { text: "Halogenation", correct: false },
            { text: "Esterification", correct: false },

        ]
    },
    {
        question: "Which of the following is an example of a redox reaction?",
        answers: [

            { text: "Combustion of methane", correct: true },
            { text: "Dissolution of salt in water", correct: false },
            { text: "Hydrolysis of sucrose", correct: false },
            { text: "Polymerization of ethylene", correct: false },

        ]
    },

    {
        question: "The process of converting a solid directly into a liquid is called:",
        answers: [

            { text: "Sublimation", correct: false },
            { text: "Fusion", correct: true },
            { text: "Vaporization", correct: false },
            { text: "Condensation", correct: false },

        ]
    },
    {
        question: "Which of the following is a noble gas?",
        answers: [

            { text: "Helium", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Chlorine", correct: false },
            { text: "Fluorine", correct: false },

        ]
    },
    {
        question: "The atomic number represents the number of:",
        answers: [

            { text: "Protons in an atom", correct: true },
            { text: "Electrons in an atom", correct: false },
            { text: "Neutrons in an atom", correct: false },
            { text: "Protons and neutrons in an atom", correct: false },

        ]
    },
    {
        question: "What is the value of sin 90 degrees?",
        answers: [

            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "-1", correct: false },
            { text: "Undefined", correct: false },

        ]
    },
    {
        question: "If a quadratic equation has no real roots, what is the nature of its discriminant?",
        answers: [

            { text: "Positive", correct: false },
            { text: "Negative", correct: true },
            { text: "Zero", correct: false },
            { text: "None of the above", correct: false },

        ]
    },
    {
        question: "The value of log1 is:",
        answers: [

            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "-1", correct: false },
            { text: "Undefined", correct: false },

        ]
    },
    {
        question: "If a number is divisible by both 3 and 4, then it must be divisible by:",
        answers: [

            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "12", correct: true },
            { text: "16", correct: false },

        ]
    },
    {
        question: "What is the value of tan 45 degrees?",
        answers: [

            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "-1", correct: false },
            { text: "Undefined", correct: false },

        ]
    },
    {
        question: "The angle between the minute hand and the hour hand of a clock at 3:15 is:",
        answers: [

            { text: "30 degrees", correct: false },
            { text: "45 degrees", correct: false },
            { text: "60 degrees", correct: true },
            { text: "75 degrees", correct: false },

        ]
    },

    {
        question: "If a number is divisible by both 5 and 6, then it must be divisible by:",
        answers: [

            { text: "11", correct: false },
            { text: "20", correct: false },
            { text: "25", correct: false },
            { text: "30", correct: true },

        ]
    },

    {
        question: "The sum of the angles of a triangle is:",
        answers: [

            { text: "90 degrees", correct: false },
            { text: "180 degrees", correct: true },
            { text: "270 degrees", correct: false },
            { text: "360 degrees", correct: false },

        ]
    },

    //chemo

    {
        question: "The smallest matter particle that can take part in chemical reaction is",
        answers: [

            { text: "atom", correct: true },
            { text: "molecule", correct: false },
            { text: "atom and molecule", correct: false },
            { text: "None of these", correct: false },

        ]
    },
    {
        question: ". Matter is anything which occupies ... ... A and has... ... B . Here, A and B are",
        answers: [
            { text: "density and mass", correct: false },
            { text: "volume and mass", correct: false },
            { text: "space and mass", correct: true },
            { text: "None of these", correct: false },

        ]
    },

    {
        question: "The solid like conducting state of gases with free electrons is called",
        answers: [

            { text: "sol state", correct: false },
            { text: "gel state", correct: false },
            { text: "plasma state", correct: true },
            { text: " All of these", correct: false },

        ]
    },

    {
        question: "Which of the following is not a mixture ?",
        answers: [

            { text: "Gasoline", correct: false },
            { text: "Distilled alcohol", correct: true },
            { text: "LPG", correct: false },
            { text: "Iodised table salt", correct: false },

        ]
    },

    {
        question: "In which of the following numbers all zeros are significant?",
        answers: [

            { text: "0.500", correct: false },
            { text: "30.000", correct: true },
            { text: "0.00030", correct: false },
            { text: "0.0050", correct: false },

        ]
    },

    {
        question: "A measured temperature on Fahrenheit scale is 200 F. What will this reading be on celsius scale?",
        answers: [

            { text: "40", correct: false },
            { text: "94", correct: false },
            { text: "93.3", correct: true },
            { text: "30", correct: false },

        ]
    },

    {
        question: "5.6 L of a gas at NTP are found to have a mass of 11 g. The molecular mass of the gas is",
        answers: [

            { text: "36", correct: false },
            { text: "48", correct: false },
            { text: "40", correct: false },
            { text: "44", correct: true },

        ]
    },

    {
        question: "Insulin contains 3.4% sulphur. What will be the minimum molecular weight of insulin ?",
        answers: [

            { text: "94.117", correct: false },
            { text: "1884", correct: false },
            { text: "941.176", correct: true },
            { text: "976", correct: false },

        ]
    },

    {
        question: "Out of 1.0 g dioxygen, 1.0 g (atomic) oxygen and 1.0 g ozone, the maximum number of molecules are contained in",
        answers: [

            { text: "1.0 g of atomic oxygen", correct: true },
            { text: "1.0 g of ozone", correct: false },
            { text: " 1.0 g of oxygen gas", correct: false },
            { text: " All contain same number of atoms", correct: false },

        ]
    },

    {
        question: "The number of water molecules in 1 L of water is",
        answers: [

            { text: "18", correct: false },
            { text: "18* 1000", correct: false },
            { text: "Na", correct: false },
            { text: "55.55 Na", correct: true },

        ]
    },

    {
        question: "The number of moles of oxygen in 1 L of aicontaining 21% oxygen by volume, in standard conditions, is",
        answers: [

            { text: "0.186 mol", correct: false },
            { text: "0.21 mol", correct: false },
            { text: "2.10 mol", correct: false },
            { text: "0.0093 mol", correct: true },

        ]
    },

    {
        question: "1.520 g of the hydroxide of a metal on ignition gave 0.995 g of oxide. The equivalent weight of metal is",
        answers: [

            { text: "1.520", correct: false },
            { text: "0.995", correct: false },
            { text: "19.00", correct: false },
            { text: "9.00", correct: true },

        ]
    },
    {
        question: "The minimum number of moles of O2 required for complete combustion of 1 mole of propane and 2 moles of butane is",
        answers: [

            { text: "18", correct: true },
            { text: "18.18", correct: false },
            { text: "18.28", correct: false },
            { text: "18.10", correct: false },

        ]
    },
    {
        question: "The volume (in mL) of 0.1 N NaOH required to neutralise 10 mL of 0.1 N phosphonic acid is",
        answers: [

            { text: "11", correct: false },
            { text: "12", correct: false },
            { text: "10", correct: true },
            { text: "15", correct: false },

        ]
    },
    {
        question: "2.76 g of silver carbonate on being strongly heated yields a residue weighing …… g",
        answers: [

            { text: "2.16", correct: false },
            { text: "3.16", correct: false },
            { text: "4.16", correct: false },
            { text: "2.16", correct: true },

        ]
    },
    {
        question: "The molality of the solution containing 18.25 g of HCl gas in 500 g of water will be",
        answers: [

            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },

        ]
    },

    {
        question: "Which of the following will not show deflection from the path on passing through an electric field?",
        answers: [

            { text: "Proton", correct: false },
            { text: "Cathode Rays", correct: false },
            { text: "Electron", correct: false },
            { text: "Neutron", correct: true },

        ]
    },

    {
        question: "Choose the arrangement which shows the increasing value of e/m for e p n and a-particles",
        answers: [

            { text: "n < a < p < e", correct: true },
            { text: "e < p < a < n", correct: false },
            { text: "n < p < e < a", correct: false },
            { text: "p < n < a < e", correct: false },

        ]
    },
    {
        question: "Hydrogen has three isotopes (A), (B) and (C). If the number of neutron(s) in (A), (B) and (C) respectively, are x y and z , the sum of x y and z is",
        answers: [

            { text: "4", correct: false },
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "1", correct: false },

        ]
    },
    {
        question: "The kinetic energy of the photoelectrons does not depend upon",
        answers: [

            { text: "Intensity of incident radiation", correct: true },
            { text: "Frequency of incident radiation", correct: false },
            { text: "Wavelength of incident radiation", correct: false },
            { text: "Wave number of incident radiation", correct: false },

        ]
    },
    {
        question: "The ratio of the energy of a photon of 2000 Armstrong wavelength radiation to that of 4000 Armstrong wavelength radiation is",
        answers: [

            { text: "1/4", correct: false },
            { text: "4", correct: false },
            { text: "1/2", correct: false },
            { text: "2", correct: true },

        ]
    },
    {
        question: "In photoelectric effect, the kinetic energy of photoelectron increase linearly with the",
        answers: [

            { text: "wavelength of incident light", correct: false },
            { text: "velocity of incident light", correct: false },
            { text: " frequency of incident light", correct: true },
            { text: "atomic mass of an element", correct: false },

        ]
    },
    {
        question: "According to Bohr’s theory, the angular momentum for an electron of 3rd orbit is",
        answers: [

            { text: "3 h", correct: true },
            { text: "1.5 h", correct: false },
            { text: "9 h", correct: false },
            { text: "2.h/pi", correct: false },

        ]
    },
    {
        question: "Which of the following transitions are not allowed in the normal electronic emission spectrum of an atom?",
        answers: [

            { text: "2s -> 1s", correct: false },
            { text: "2p -> 1s", correct: false },
            { text: "3d -> 4p", correct: true },
            { text: "5p -> 3s", correct: false },

        ]
    },
    {
        question: "The region in the electromagnetic spectrum where the Balmer series lines appear is",
        answers: [

            { text: "infrared", correct: false },
            { text: "ultraviolet", correct: false },
            { text: "microwave", correct: false },
            { text: "visible", correct: true },

        ]
    },
    {
        question: "The wave nature of electron is verified by",
        answers: [

            { text: "de-Broglie", correct: false },
            { text: "Davisson and Germer", correct: true },
            { text: "Rutherford", correct: false },
            { text: "All of these", correct: false },

        ]
    },
    {
        question: "Out of electron, proton, neutron and a-particle which one will have a higher velocity to produce matter wave of the same wavelength?",
        answers: [

            { text: "Electron", correct: true },
            { text: "Proton", correct: false },
            { text: "Neutron", correct: false },
            { text: "a-particle", correct: false },

        ]
    },
    {
        question: "Which of the following particles moving with same velocity would be associated with smallest de-Broglie wavelength?",
        answers: [

            { text: "Helium molecule", correct: false },
            { text: "Oxygen molecule", correct: true },
            { text: "Hydrogen molecule", correct: false },
            { text: "Carbon molecule", correct: false },

        ]
    },
    {
        question: "If the kinetic energy of an electron is increased four times, the wavelength of the de-Broglie wave associated with it would becomes",
        answers: [

            { text: "half times", correct: true },
            { text: "1/4 times", correct: false },
            { text: "four times", correct: false },
            { text: "two times", correct: false },

        ]
    },
    {
        question: "The two electrons in K-subshell will differ in",
        answers: [

            { text: "principal quantum number", correct: false },
            { text: "azimuthal quantum number", correct: false },
            { text: "magnetic quantum number", correct: false },
            { text: "spin quantum number", correct: true },

        ]
    },
    {
        question: "Which of the following arrangement of orbitals is in the increasing order of energy?",
        answers: [

            { text: " 1s, 2s, 2p, 3s", correct: true },
            { text: "4s, 3s, 3p, 4d", correct: false },
            { text: "5p, 4d, 5d, 4f, 6s", correct: false },
            { text: "5f, 6d, 7s, 7p", correct: false },

        ]
    },
    {
        question: "What is the lowest value of n that allows g orbitals to exist?",
        answers: [

            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },

        ]
    },
    {
        question: "Which of the following has non-spherical shell of electron?",
        answers: [

            { text: "He", correct: false },
            { text: "B", correct: true },
            { text: "Be", correct: false },
            { text: "Li", correct: false },

        ]
    },
    {
        question: "Total number of orbitals associated with third shell will be",
        answers: [

            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "9", correct: true },
            { text: "3", correct: false },

        ]
    },
    {
        question: "Number of angular nodes for 4 d orbital is",
        answers: [

            { text: "4", correct: false },
            { text: "3", correct: false },
            { text: "2", correct: true },
            { text: "1", correct: false },

        ]
    },
    {
        question: "A certain orbital has no angular nodes and two radial nodes. The orbital is",
        answers: [

            { text: "2s", correct: false },
            { text: "3s", correct: true },
            { text: "3p", correct: false },
            { text: "2p", correct: false },

        ]
    },
    {
        question: "The Z-component of angular momentum of an electron in an atomic orbital is governed by the",
        answers: [

            { text: "magnetic quantum number", correct: false },
            { text: "azimuthal quantum number", correct: true },
            { text: "spin quantum number", correct: false },
            { text: "principal quantum number", correct: false },

        ]
    },
    {
        question: "The number of subshells associated with n = 4 and m = - 2 quantum numbers is",
        answers: [

            { text: "8", correct: false },
            { text: "2", correct: true },
            { text: "16", correct: false },
            { text: "4", correct: false },

        ]
    },
    {
        question: "The correct statement about probability density (except at infinite distance from nucleus) is",
        answers: [

            { text: "it can be zero for 1s orbital", correct: false },
            { text: "it can be negative for 2p orbital", correct: false },
            { text: "it can be zero for 3p orbital", correct: true },
            { text: "it can never be zero for 2s orbital", correct: false },

        ]
    },
    {
        question: "The correct set of four quantum numbers for the valence electrons of rubidium atom, Z = 37 is",
        answers: [

            { text: "5,0,0,+1/2", correct: true },
            { text: "5,1,0,+1/2", correct: false },
            { text: "5,1,1,+1/2", correct: false },
            { text: "5,0,1,+1/2", correct: false },

        ]
    },

    {
        question: "If an electron has spin quantum number of +1/2 and a magnetic quantum number of –1, it cannot be represented in an",
        answers: [
            { text: "s-orbital", correct: true },
            { text: "p-orbital", correct: false },
            { text: "d-orbital", correct: false },
            { text: "f-orbital", correct: false },

        ]
    },
    {
        question: "The electronic configuration of the oxide ion is more similar to the electronic configuration of the",
        answers: [

            { text: "sulphide ion", correct: false },
            { text: "nitride ion", correct: true },
            { text: "oxygen atom", correct: false },
            { text: "nitrogen atom", correct: false },

        ]
    },

    {
        question: "Which transition in the hydrogen atomic spectrum will have the same wavelength as the Balmer transition, n = 4 to n = 2 of He+ spectrum?",
        answers: [

            { text: "n = 4 to n = 3 ", correct: false },
            { text: "n = 3 to n = 2", correct: false },
            { text: "n = 4 to n = 2", correct: false },
            { text: "n = 2 to n = 1", correct: true },

        ]
    },

    {
        question: "Calculate the total number of angular nodes and radial nodes present in 3p-orbital",
        answers: [

            { text: "1,1", correct: true },
            { text: "2,1", correct: false },
            { text: "2,2", correct: false },
            { text: "1,2", correct: false },

        ]
    },

    {
        question: "What is the colour of light emitted when the electron in a hydrogen atom undergoes transition from an energy level with n = 4 to an energy level with n = 2 ",
        answers: [

            { text: "Blue", correct: true },
            { text: "White", correct: false },
            { text: "Green", correct: false },
            { text: "Red", correct: false },

        ]
    },
    {
        question: "An electron beam is accelerated through a potential difference of 10,000 volt. The de-Broglie wavelength of the electron beam is",
        answers: [

            { text: "0.123 Armstrong", correct: true },
            { text: "0.356 Armstrong", correct: false },
            { text: "0.186 Armstrong", correct: false },
            { text: "0.258 Armstrong", correct: false },

        ]
    },
    {
        question: "A particle A moving with a certain velocity has the de-Broglie wavelength of 1 Armstrong. For particle B with mass 25% of A and velocity 75% of A, calculate the de-Broglie wavelength",
        answers: [

            { text: "3 Armstrong", correct: false },
            { text: "5.33 Armstrong", correct: true },
            { text: "6.88 Armstrong", correct: false },
            { text: "0.48 Armstrong", correct: false },

        ]
    },
    {
        question: "When the excited electron of a H-atom in n = 6 drops to the ground state. The maximum number of emission line is",
        answers: [

            { text: "15", correct: true },
            { text: "16", correct: false },
            { text: "17", correct: false },
            { text: "18", correct: false },

        ]
    },
    {
        question: "The number of spherical nodes in 4p-orbital is",
        answers: [

            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },

        ]
    },
    {
        question: "………eV is the energy of a possible excited state of hydrogen",
        answers: [

            { text: "3.4", correct: true },
            { text: "4.3", correct: false },
            { text: "1.3", correct: false },
            { text: "3.1", correct: false },

        ]
    },
    {
        question: "A certain orbital has n = 4 and mL = -3. The number of radial nodes in this orbital is ",
        answers: [

            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },

        ]
    },

    {
        question: "Newlands' law of octave applies to which of the following set of elements?",

        answers: [

            { text: "Be, Mg, Ca", correct: true },
            { text: "As, K, Ca", correct: false },
            { text: "B, N, C", correct: false },
            { text: "None of these", correct: false },

        ]
    },

    {
        question: "The basis of keeping the elements in the groups of the periodic table is",
        answers: [

            { text: "ionisation potential", correct: false },
            { text: "electronegativity", correct: false },
            { text: "electron affinity", correct: false },
            { text: "number of valence electrons", correct: true },

        ]
    },

    {
        question: "According to the periodic law of elements, the variation in properties of elements is related to their",
        answers: [

            { text: "atomic masses", correct: false },
            { text: "nuclear masses", correct: false },
            { text: "atomic numbers", correct: true },
            { text: "nuclear neutron-proton number ratios", correct: false },

        ]
    },

    {
        question: "Who developed the long form of the periodic table?",
        answers: [

            { text: "Niels Bohr", correct: true },
            { text: "Moseley", correct: false },
            { text: "Mendeleef", correct: false },
            { text: "Lothar Meyer", correct: false },

        ]
    },

    {
        question: "Which of the following pairs has both members of the same period of the periodic table?",
        answers: [

            { text: "Na-Cl", correct: true },
            { text: "Na-Ca", correct: false },
            { text: "Ca-Cl", correct: false },
            { text: "Cl-Br", correct: false },

        ]
    },

    {
        question: "Why do elements in the same group have similar physical and chemical properties?",
        answers: [

            { text: "Because of same electronic configuration", correct: false },
            { text: "Because of same number of electrons", correct: false },
            { text: "Because of same number of protons", correct: false },
            { text: "Because of same valence electrons", correct: true },

        ]
    },

    {
        question: "Which one of the following belongs to representative group of elements in the periodic table?",
        answers: [

            { text: "Aluminium", correct: true },
            { text: "Chromium", correct: false },
            { text: "Argon", correct: false },
            { text: "Lanthanum", correct: false },

        ]
    },
    {
        question: "Write the atomic number of the element present in the third period and seventeenth group of the periodic table.",
        answers: [

            { text: "15", correct: false },
            { text: "17", correct: true },
            { text: "21", correct: false },
            { text: "9", correct: false },

        ]
    },
    {
        question: "According to IUPAC nomenclature, a newly discovered element has been named as Uun. The atomic number of the element is",
        answers: [

            { text: "111", correct: false },
            { text: "112", correct: false },
            { text: "109", correct: false },
            { text: "110", correct: true },

        ]
    },
    {
        question: "In third row of the periodic table, the atomic radii from Na to Cl",
        answers: [

            { text: "continuously decreases", correct: true },
            { text: "continuously increases", correct: false },
            { text: "remains constant", correct: false },
            { text: "increases but not continuously", correct: false },

        ]
    },
    {
        question: "Which of the following given atoms has the largest atomic radius?",
        answers: [

            { text: "B", correct: false },
            { text: "Li", correct: true },
            { text: "O", correct: false },
            { text: "Ne", correct: false },

        ]
    },
    {
        question: "Which of the following atoms would be expected to have the largest atomic radii ?",
        answers: [

            { text: "Oxygen", correct: false },
            { text: "Aluminium", correct: false },
            { text: "Calcium", correct: true },
            { text: "Mg", correct: false },

        ]
    },
    {
        question: "Which of the following has the smallest size ?",
        answers: [

            { text: "Na 1+", correct: false },
            { text: "Mg 2+", correct: false },
            { text: "Al 3+", correct: false },
            { text: "P 5+", correct: true },

        ]
    },
    {
        question: "Arrange the elements N, P, O and S in the order of increasing first ionisation enthalpy.",
        answers: [

            { text: "P < S < O < N", correct: false },
            { text: "S < P < O < N", correct: true },
            { text: "S < O < P < N", correct: false },
            { text: "P < S < N < O", correct: false },

        ]
    },
    {
        question: "Among the given elements the highest first ionisation enthalpy is of",
        answers: [

            { text: "B", correct: false },
            { text: "Al", correct: true },
            { text: "C", correct: false },
            { text: "Si", correct: false },

        ]
    },
    {
        question: "As one moves along a given row in the periodic table, ionisation energy",
        answers: [

            { text: "increases from left to right", correct: true },
            { text: "decreases from left to right", correct: false },
            { text: "first increases, then decreases", correct: false },
            { text: "remains the same", correct: false },

        ]
    },
    {
        question: "The first ionisation energy of lithium will be",
        answers: [

            { text: "greater than Be", correct: false },
            { text: "less than Be", correct: true },
            { text: "equal to that of Na", correct: false },
            { text: "equal to that of F", correct: false },

        ]
    },
    {
        question: "When the first ionisation energies are plotted against atomic number, the peaks are occupied by",
        answers: [

            { text: "alkali metals", correct: false },
            { text: "halogens", correct: false },
            { text: "transition metals", correct: false },
            { text: "rare gases", correct: true },

        ]
    },
    {
        question: "The correct order of ionisation energy for comparing carbon, nitrogen and oxygen is",
        answers: [

            { text: "C < N > O", correct: true },
            { text: "C > N < O", correct: false },
            { text: "C > N > O ", correct: false },
            { text: "C < N < O", correct: false },

        ]
    },
    {
        question: "Which of the following isoelectronic ions has lowest ionisation energy?",
        answers: [

            { text: "Cl-", correct: false },
            { text: "Ca2+", correct: false },
            { text: "K+", correct: false },
            { text: "S2-", correct: true },

        ]
    },
    {
        question: "Which of the following relation is correct?",
        answers: [

            { text: " Ist IE of C > Ist IE of B", correct: true },
            { text: "Ist IE of C < Ist IE of B", correct: false },
            { text: "IInd IE of C > IInd IE of B", correct: false },
            { text: "Both (b) and (c)", correct: false },

        ]
    },
    {
        question: "If the IP of Na is 5.48 eV, the ionisation potential of K will be",
        answers: [

            { text: "same as that of Na", correct: false },
            { text: "4.34 eV", correct: false },
            { text: "5.68 eV", correct: false },
            { text: "10.88 eV", correct: true },

        ]
    },
    {
        question: "The increasing order of the first ionisation enthalpies of the elements B, P, S and F (lowest first) is",
        answers: [

            { text: "F < S < P < B", correct: false },
            { text: "P < S < B < F", correct: false },
            { text: "B < P < S < F", correct: false },
            { text: "B < S < P < F", correct: true },

        ]
    },
    {
        question: "The ionic mobility of alkali metal ions in aqueous solution is maximum for",
        answers: [

            { text: "K+", correct: false },
            { text: "Rb+", correct: true },
            { text: "Li+", correct: false },
            { text: "Na +", correct: false },

        ]
    },
    {
        question: "The correct increasing order of non-metallic character is",
        answers: [

            { text: "P < S < O < N", correct: false },
            { text: "S < P < O < N", correct: false },
            { text: "S < O < P < N", correct: false },
            { text: "P < S < N < O", correct: true },

        ]
    },
    {
        question: "Which of the following has highest electron affinity?",
        answers: [

            { text: "N", correct: false },
            { text: "O", correct: false },
            { text: "F", correct: false },
            { text: "Cl", correct: true },

        ]
    },
    {
        question: "Elements of which group form anions most readily?",
        answers: [

            { text: "Halogens", correct: true },
            { text: "Alkali metals", correct: false },
            { text: "Oxygen family", correct: false },
            { text: "Nitrogen group", correct: false },

        ]
    },
    {
        question: "Which one of the following process requiring absorption of energy?",
        answers: [

            { text: "Cl->Cl(1-)", correct: false },
            { text: "H->H(1-)", correct: false },
            { text: "O->O(2-)", correct: true },
            { text: "F->F(1-)", correct: false },

        ]
    },
    {
        question: "The values of electronegativity of atom A and B are 1.20 and 4.0 respectively. The percentage of ionic character of A—B bond is",
        answers: [

            { text: "58.3%", correct: false },
            { text: "48%", correct: false },
            { text: "79.6%", correct: false },
            { text: "73.6%", correct: true },

        ]
    },
    {
        question: "The elements X, Y, Z and T have the indicated electronic configurations. Starting with the innermost shell, which of the following is the most metallic element ?",
        answers: [

            { text: "X = 2 8 4", correct: false },
            { text: "Y = 2 8 8", correct: false },
            { text: "Z = 2, 8, 8, 1", correct: true },
            { text: "T = 2, 8, 8, 7", correct: false },

        ]
    },
    {
        question: "Among alkali metals which element do you expect to be least electronegative?",
        answers: [

            { text: "K", correct: false },
            { text: "Na", correct: false },
            { text: "Cs", correct: false },
            { text: "Fr", correct: true },

        ]
    },
    {
        question: "With respect to chlorine, hydrogen will be",
        answers: [

            { text: "electropositive", correct: true },
            { text: "electropositive", correct: false },
            { text: "neutral", correct: false },
            { text: "None of these", correct: false },

        ]
    },
    {
        question: "The set of elements that differ in mutual relationship from those of the other sets is",
        answers: [

            { text: "Li - Mg", correct: false },
            { text: "B - Si", correct: false },
            { text: "Be - Al", correct: false },
            { text: "Li - Na", correct: true },

        ]
    },
    {
        question: "5. As we go from left to right in period two of the periodic table, gram atomic volume of the elements",
        answers: [

            { text: " will change indefinitely", correct: false },
            { text: "decreases", correct: true },
            { text: "increase at a constant rate", correct: false },
            { text: "first increase then decrease", correct: false },

        ]
    },
    {
        question: "Metallic nature and basic nature of the oxides……as we move along a period.",
        answers: [

            { text: "increases", correct: false },
            { text: "decreases", correct: true },
            { text: "remains constant", correct: false },
            { text: "first increase then decreases", correct: false },

        ]
    },
    {
        question: "The metal having highest melting point is",
        answers: [

            { text: "Cr", correct: false },
            { text: "Ag", correct: false },
            { text: "diamond", correct: false },
            { text: "W", correct: true },

        ]
    },
    {
        question: "Which of the following metals exhibits more than one oxidation state?",
        answers: [

            { text: "Na", correct: false },
            { text: "Mg", correct: false },
            { text: "Al", correct: false },
            { text: "Fe", correct: true },

        ]
    },
    {
        question: "The correct order of reactivity of halogens is",
        answers: [

            { text: "F > Br > Cl > I", correct: false },
            { text: "F > Cl > Br > I", correct: true },
            { text: "I > Br > Cl > F", correct: false },
            { text: "Cl > I > Br > F", correct: false },

        ]
    },
    {
        question: "If Aufbau rule is not followed, K-19 will be placed in",
        answers: [

            { text: "s-block", correct: false },
            { text: "p-block", correct: false },
            { text: "d-block", correct: true },
            { text: "f-block", correct: false },

        ]
    },
    {
        question: "Choose the correct order of atomic radii of fluorine and neon (in pm) out of the options given below",
        answers: [

            { text: "72, 160", correct: true },
            { text: "160, 160", correct: false },
            { text: "72, 72", correct: false },
            { text: "160, 72", correct: false },

        ]
    },
    {
        question: "The trivalent ion having largest size in lanthanide series is",
        answers: [

            { text: "Ti", correct: false },
            { text: "Zr", correct: false },
            { text: "Hf", correct: false },
            { text: "La", correct: true },

        ]
    },
    {
        question: "Which of the following has the highest second ionisation energy?",
        answers: [

            { text: "Calcium", correct: false },
            { text: "Chromium", correct: true },
            { text: "Iron", correct: false },
            { text: "Cobalt", correct: false },

        ]
    },
    {
        question: "The bond length of LiF will be",
        answers: [

            { text: "equal to that of KF", correct: false },
            { text: "more than that of KF", correct: false },
            { text: "equal to that of NaF", correct: false },
            { text: "less than that of NaF", correct: true },

        ]
    },
    {
        question: "A trend common to both group I and VII elements in the periodic table is that as the atomic number increases the",
        answers: [

            { text: "atomic radius also increases", correct: true },
            { text: "oxidising power also increases", correct: false },
            { text: "reactivity with water also increases", correct: false },
            { text: "maxivalency also increases", correct: false },

        ]
    },
    {
        question: " The correct order of the first ionisation enthalpies is",
        answers: [

            { text: "Mn < TI < Zn < Ni", correct: false },
            { text: "Ti < Mn < Zn < Ni", correct: false },
            { text: "Zn < Ni < Mn <Ti", correct: false },
            { text: "Ti < Mn < Ni < Zn", correct: true },

        ]
    },
    {
        question: "Which is not the correct order for the stated property?",
        answers: [

            { text: "Ba > Sr > Mg, atomic radius", correct: false },
            { text: "F > O > N, first ionisation enthalpy", correct: true },
            { text: "Cl > F > I, electron affinity", correct: false },
            { text: "O > Se > Te, electronegativity", correct: false },

        ]
    },
    {
        question: "Which one of the following arrangements represents the correct order of electron gain enthalpy (with negative sign) of the given atomic species?",
        answers: [

            { text: "Cl < F < S < O", correct: false },
            { text: "O < S < F < Cl", correct: true },
            { text: "S < O < Cl < F", correct: false },
            { text: "F < Cl < O < S", correct: false },

        ]
    },
    {
        question: "For d-block elements the correct first ionisation potential is of the order",
        answers: [

            { text: "Zn > Fe > Cu > Cr", correct: true },
            { text: "Sc » Ti < V » Cr", correct: false },
            { text: "Zn < Cu < Ni < Co", correct: false },
            { text: "V > Cr > Mn > Fe", correct: false },

        ]
    },
    {
        question: "Which of the following is the correct order of atomic sizes?(At. no. : Ce 58 = , Sn 50, = Yb 70 = and Lu 71)",
        answers: [

            { text: "Ce > Sn > Yb > Lu", correct: false },
            { text: "Sn > Yb > Ce > Lu", correct: false },
            { text: "Sn > Ce > Yb > Lu", correct: true },
            { text: "Lu > Yb > Sn > Ce", correct: false },

        ]
    },
    {
        question: "The covalent radius of silicon is 1.175 Å. Calculate the electronegativity of silicon using Allred-Rochow method …",
        answers: [

            { text: "1.23", correct: false },
            { text: "2.22", correct: false },
            { text: "0.72", correct: false },
            { text: "1.73", correct: true },

        ]
    },
    {
        question: "The effective nuclear charge for 4s electrons of Zn will be",
        answers: [

            { text: "1.90", correct: false },
            { text: "3.33", correct: false },
            { text: "4.01", correct: false },
            { text: "4.35", correct: true },

        ]
    },
    {
        question: "The ionisation potential of hydrogen is 13.60 eV. If x kJ energy required to produce one mole of H + ion. Then the value of x …… .",
        answers: [

            { text: "12.1234", correct: false },
            { text: "1308.88", correct: false },
            { text: "1200.20", correct: false },
            { text: "1309.68", correct: true },

        ]
    },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
    // {
    //   question: "",
    //   answers: 
    //   [

    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: false},
    //     { text: "", correct: true},

    //   ]
    // },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

const qlen = questions.length;
var score = 0

function startQuiz() {
    // currentQuestionIndex = 0;
    var score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();
    var score = 0;
    var currentQuestionIndex = Math.floor(Math.random() * qlen - 1) + 1;
    // alert(currentQuestionIndex);
    let currentQuestion = questions[currentQuestionIndex];
    // let questionNo = currentQuestion + 1;
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);

    });

}

function resetState() {
    var score = 0;
    nextButton.style.display = 'none';

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You attempted ${score} questions`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    // var score = 0;

}

function handleNextButton() {
    // currentQuestionIndex++;
    // if (currentQuestionIndex < questions.length) {
    var score = 0;
    showQuestion();
    // }else 
    // {
    //   showScore();
    // }
}
nextButton.addEventListener("click", () => {
    // if (currentQuestionIndex < questions.length) {
    //   handleNextButton();
    // }else 
    // {
    var score = 0;
    startQuiz();
    // }
});
startQuiz();
