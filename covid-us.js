const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
}) 
$(document).ready(function(){
    $(".WA").hover(
        function(){
            $(".state-modal-WA").toggle();
        }
    );
    $(".OR").hover(
        function(){
            $(".state-modal-OR").toggle();
        }
    );
    $(".ID").hover(
        function(){
            $(".state-modal-ID").toggle();
        }
    );
    $(".MT").hover(
        function(){
            $(".state-modal-MT").toggle();
        }
    );
    $(".WY").hover(
        function(){
            $(".state-modal-WY").toggle();
        }
    );
    $(".CA").hover(
        function(){
            $(".state-modal-CA").toggle();
        }
    );
    $(".NV").hover(
        function(){
            $(".state-modal-NV").toggle();
        }
    );
    $(".UT").hover(
        function(){
            $(".state-modal-UT").toggle();
        }
    );
    $(".AZ").hover(
        function(){
            $(".state-modal-AZ").toggle();
        }
    );
    $(".NM").hover(
        function(){
            $(".state-modal-NM").toggle();
        }
    );
    $(".CO").hover(
        function(){
            $(".state-modal-CO").toggle();
        }
    );
    $(".TX").hover(
        function(){
            $(".state-modal-TX").toggle();
        }
    );
    $(".OK").hover(
        function(){
            $(".state-modal-OK").toggle();
        }
    );
    $(".ND").hover(
        function(){
            $(".state-modal-ND").toggle();
        }
    );
    $(".SD").hover(
        function(){
            $(".state-modal-SD").toggle();
        }
    );
    $(".MN").hover(
        function(){
            $(".state-modal-MN").toggle();
        }
    );
    $(".LA").hover(
        function(){
            $(".state-modal-LA").toggle();
        }
    );
    $(".MS").hover(
        function(){
            $(".state-modal-MS").toggle();
        }
    );
    $(".AL").hover(
        function(){
            $(".state-modal-AL").toggle();
        }
    );
    $(".FL").hover(
        function(){
            $(".state-modal-FL").toggle();
        }
    );
    $(".NE").hover(
        function(){
            $(".state-modal-NE").toggle();
        }
    );
    $(".KS").hover(
        function(){
            $(".state-modal-KS").toggle();
        }
    );
    $(".IA").hover(
        function(){
            $(".state-modal-IA").toggle();
        }
    );
    $(".MO").hover(
        function(){
            $(".state-modal-MO").toggle();
        }
    );
    $(".AR").hover(
        function(){
            $(".state-modal-AR").toggle();
        }
    );


    $(".KY").hover(
        function(){
            $(".state-modal-KY").toggle();
        }
    );
    $(".TN").hover(
        function(){
            $(".state-modal-TN").toggle();
        }
    );
    $(".PA").hover(
        function(){
            $(".state-modal-PA").toggle();
        }
    );
    $(".NY").hover(
        function(){
            $(".state-modal-NY").toggle();
        }
    );
    $(".IL").hover(
        function(){
            $(".state-modal-IL").toggle();
        }
    );
    $(".IN").hover(
        function(){
            $(".state-modal-IN").toggle();
        }
    );
    $(".WI").hover(
        function(){
            $(".state-modal-WI").toggle();
        }
    );
    $(".MI").hover(
        function(){
            $(".state-modal-MI").toggle();
        }
    );
    $(".OH").hover(
        function(){
            $(".state-modal-OH").toggle();
        }
    );
    $(".GA").hover(
        function(){
            $(".state-modal-GA").toggle();
        }
    );
    $(".SC").hover(
        function(){
            $(".state-modal-SC").toggle();
        }
    );

    $(".NC").hover(
        function(){
            $(".state-modal-NC").toggle();
        }
    );
    $(".VA").hover(
        function(){
            $(".state-modal-VA").toggle();
        }
    );
    $(".WV").hover(
        function(){
            $(".state-modal-WV").toggle();
        }
    );
    $(".NJ").hover(
        function(){
            $(".state-modal-NJ").toggle();
        }
    );
    $(".ME").hover(
        function(){
            $(".state-modal-ME").toggle();
        }
    );
    $(".VT").hover(
        function(){
            $(".state-modal-VT").toggle();
        }
    );
    $(".NH").hover(
        function(){
            $(".state-modal-NH").toggle();
        }
    );
    $(".MA").hover(
        function(){
            $(".state-modal-MA").toggle();
        }
    );
});




const total_covid_data = 'https://api.covidactnow.org/v2/country/US.json?apiKey=d6ebbbb1343042ed8274eaa43ec20d5a';
async function getTotalCovid() {
    const response = await fetch(total_covid_data);
    const totalData = await response.json();
    const {cases, deaths} = totalData;
    lastUpdatedDate = totalData.lastUpdatedDate
    document.getElementById('lastUpdatedDate').textContent = lastUpdatedDate;
    totalCases = totalData.actuals.cases.toLocaleString("en-US")
    newCases = totalData.actuals.newCases.toLocaleString("en-US")
    totalDeaths = totalData.actuals.deaths.toLocaleString("en-US")
    newDeaths = totalData.actuals.newDeaths.toLocaleString("en-US")
    vaccinationsCompleted = totalData.actuals.vaccinationsCompleted.toLocaleString("en-US")
    vaccinesAdministered = totalData.actuals.vaccinesAdministered.toLocaleString("en-US")
    document.getElementById('totalCases').textContent = totalCases;
    document.getElementById('newCases').textContent = newCases;
    document.getElementById('totalDeaths').textContent = totalDeaths;
    document.getElementById('newDeaths').textContent = newDeaths;
    document.getElementById('vaccinationsCompleted').textContent = vaccinationsCompleted;
    document.getElementById('vaccinesAdministered').textContent = vaccinesAdministered;
}
getTotalCovid() 
const api_url = 'https://api.covidactnow.org/v2/states.json?apiKey=d6ebbbb1343042ed8274eaa43ec20d5a';
async function getCovid() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {cases, deaths} = data;
    cases_AK = data[0].actuals.cases.toLocaleString("en-US")
    deaths_AK = data[0].actuals.deaths.toLocaleString("en-US")
    newCases_AK = data[0].actuals.newCases.toLocaleString("en-US")
    document.getElementById('AK-totalCase').textContent = cases_AK;
    document.getElementById('AK-deathsCase').textContent = deaths_AK;
    document.getElementById('AK-newCase').textContent = newCases_AK;
// AK
    cases_AL = data[1].actuals.cases.toLocaleString("en-US")
    deaths_AL = data[1].actuals.deaths.toLocaleString("en-US")
    newCases_AL = data[1].actuals.newCases.toLocaleString("en-US")

    document.getElementById('AL-totalCase').textContent = cases_AL;
    document.getElementById('AL-deathsCase').textContent = deaths_AL;
    document.getElementById('AL-newCase').textContent = newCases_AL;
// CA
    cases_AR = data[2].actuals.cases.toLocaleString("en-US")
    deaths_AR = data[2].actuals.deaths.toLocaleString("en-US")
    newCases_AR = data[2].actuals.newCases.toLocaleString("en-US")

    document.getElementById('AR-totalCase').textContent = cases_AR;
    document.getElementById('AR-deathsCase').textContent = deaths_AR;
    document.getElementById('AR-newCase').textContent = newCases_AR;
// AR
    cases_AZ = data[3].actuals.cases.toLocaleString("en-US")
    deaths_AZ = data[3].actuals.deaths.toLocaleString("en-US")
    newCases_AZ = data[3].actuals.newCases.toLocaleString("en-US")

    document.getElementById('AZ-totalCase').textContent = cases_AZ;
    document.getElementById('AZ-deathsCase').textContent = deaths_AZ;
    document.getElementById('AZ-newCase').textContent = newCases_AZ;
// AR
    cases_CA = data[4].actuals.cases.toLocaleString("en-US")
    deaths_CA = data[4].actuals.deaths.toLocaleString("en-US")
    newCases_CA = data[4].actuals.newCases.toLocaleString("en-US")

    document.getElementById('CA-totalCase').textContent = cases_CA;
    document.getElementById('CA-deathsCase').textContent = deaths_CA;
    document.getElementById('CA-newCase').textContent = newCases_CA;
// CA
cases_CO = data[5].actuals.cases.toLocaleString("en-US")
deaths_CO = data[5].actuals.deaths.toLocaleString("en-US")
newCases_CO = data[5].actuals.newCases.toLocaleString("en-US")

document.getElementById('CO-totalCase').textContent = cases_CO;
document.getElementById('CO-deathsCase').textContent = deaths_CO;
document.getElementById('CO-newCase').textContent = newCases_CO;
// CO

cases_CT = data[6].actuals.cases.toLocaleString("en-US")
deaths_CT = data[6].actuals.deaths.toLocaleString("en-US")
newCases_CT = data[6].actuals.newCases.toLocaleString("en-US")

document.getElementById('CT-totalCase').textContent = cases_CT;
document.getElementById('CT-deathsCase').textContent = deaths_CT;
document.getElementById('CT-newCase').textContent = newCases_CT;
// CO

cases_DE = data[8].actuals.cases.toLocaleString("en-US")
deaths_DE = data[8].actuals.deaths.toLocaleString("en-US")
newCases_DE = data[8].actuals.newCases.toLocaleString("en-US")

document.getElementById('DE-totalCase').textContent = cases_DE;
document.getElementById('DE-deathsCase').textContent = deaths_DE;
document.getElementById('DE-newCase').textContent = newCases_DE;
// DE
cases_FL = data[9].actuals.cases.toLocaleString("en-US")
deaths_FL = data[9].actuals.deaths.toLocaleString("en-US")
newCases_FL = data[9].actuals.newCases.toLocaleString("en-US")

document.getElementById('FL-totalCase').textContent = cases_FL;
document.getElementById('FL-deathsCase').textContent = deaths_FL;
document.getElementById('FL-newCase').textContent = newCases_FL;
// FL

cases_GA = data[10].actuals.cases.toLocaleString("en-US")
deaths_GA = data[10].actuals.deaths.toLocaleString("en-US")
newCases_GA = data[10].actuals.newCases.toLocaleString("en-US")

document.getElementById('GA-totalCase').textContent = cases_GA;
document.getElementById('GA-deathsCase').textContent = deaths_GA;
document.getElementById('GA-newCase').textContent = newCases_GA;
// GA

cases_HI = data[11].actuals.cases.toLocaleString("en-US")
deaths_HI = data[11].actuals.deaths.toLocaleString("en-US")
newCases_HI = data[11].actuals.newCases.toLocaleString("en-US")

document.getElementById('HI-totalCase').textContent = cases_HI;
document.getElementById('HI-deathsCase').textContent = deaths_HI;
document.getElementById('HI-newCase').textContent = newCases_HI;
// HI

cases_IA = data[12].actuals.cases.toLocaleString("en-US")
deaths_IA = data[12].actuals.deaths.toLocaleString("en-US")
newCases_IA = data[12].actuals.newCases.toLocaleString("en-US")

document.getElementById('IA-totalCase').textContent = cases_IA;
document.getElementById('IA-deathsCase').textContent = deaths_IA;
document.getElementById('IA-newCase').textContent = newCases_IA;
// IA
cases_ID = data[13].actuals.cases.toLocaleString("en-US")
deaths_ID = data[13].actuals.deaths.toLocaleString("en-US")
newCases_ID = data[13].actuals.newCases.toLocaleString("en-US")
document.getElementById('ID-totalCase').textContent = cases_ID;
document.getElementById('ID-deathsCase').textContent = deaths_ID;
document.getElementById('ID-newCase').textContent = newCases_ID;
// ID
cases_IL = data[14].actuals.cases.toLocaleString("en-US")
deaths_IL = data[14].actuals.deaths.toLocaleString("en-US")
newCases_IL = data[14].actuals.newCases.toLocaleString("en-US")
document.getElementById('IL-totalCase').textContent = cases_IL;
document.getElementById('IL-deathsCase').textContent = deaths_IL;
document.getElementById('IL-newCase').textContent = newCases_IL;
// IL
cases_IN = data[15].actuals.cases.toLocaleString("en-US")
deaths_IN = data[15].actuals.deaths.toLocaleString("en-US")
newCases_IN = data[15].actuals.newCases.toLocaleString("en-US")
document.getElementById('IN-totalCase').textContent = cases_IN;
document.getElementById('IN-deathsCase').textContent = deaths_IN;
document.getElementById('IN-newCase').textContent = newCases_IN;
// IN
cases_KS = data[16].actuals.cases.toLocaleString("en-US")
deaths_KS = data[16].actuals.deaths.toLocaleString("en-US")
newCases_KS = data[16].actuals.newCases.toLocaleString("en-US")

document.getElementById('KS-totalCase').textContent = cases_KS;
document.getElementById('KS-deathsCase').textContent = deaths_KS;
document.getElementById('KS-newCase').textContent = newCases_KS;
// KS

cases_KY = data[17].actuals.cases.toLocaleString("en-US")
deaths_KY = data[17].actuals.deaths.toLocaleString("en-US")
newCases_KY = data[17].actuals.newCases.toLocaleString("en-US")

document.getElementById('KY-totalCase').textContent = cases_KY;
document.getElementById('KY-deathsCase').textContent = deaths_KY;
document.getElementById('KY-newCase').textContent = newCases_KY;
// KY

cases_LA = data[18].actuals.cases.toLocaleString("en-US")
deaths_LA = data[18].actuals.deaths.toLocaleString("en-US")
newCases_LA = data[18].actuals.newCases.toLocaleString("en-US")

document.getElementById('LA-totalCase').textContent = cases_LA;
document.getElementById('LA-deathsCase').textContent = deaths_LA;
document.getElementById('LA-newCase').textContent = newCases_LA;
// LA

cases_MA = data[19].actuals.cases.toLocaleString("en-US")
deaths_MA = data[19].actuals.deaths.toLocaleString("en-US")
newCases_MA = data[19].actuals.newCases.toLocaleString("en-US")

document.getElementById('MA-totalCase').textContent = cases_MA;
document.getElementById('MA-deathsCase').textContent = deaths_MA;
document.getElementById('MA-newCase').textContent = newCases_MA;
// MA

cases_ME = data[21].actuals.cases.toLocaleString("en-US")
deaths_ME = data[21].actuals.deaths.toLocaleString("en-US")
newCases_ME = data[21].actuals.newCases.toLocaleString("en-US")

document.getElementById('ME-totalCase').textContent = cases_ME;
document.getElementById('ME-deathsCase').textContent = deaths_ME;
document.getElementById('ME-newCase').textContent = newCases_ME;
// ME

cases_MI = data[22].actuals.cases.toLocaleString("en-US")
deaths_MI = data[22].actuals.deaths.toLocaleString("en-US")
newCases_MI = data[22].actuals.newCases.toLocaleString("en-US")

document.getElementById('MI-totalCase').textContent = cases_MI;
document.getElementById('MI-deathsCase').textContent = deaths_MI;
document.getElementById('MI-newCase').textContent = newCases_MI;
// MI

cases_MN = data[23].actuals.cases.toLocaleString("en-US")
deaths_MN = data[23].actuals.deaths.toLocaleString("en-US")
newCases_MN = data[23].actuals.newCases.toLocaleString("en-US")

document.getElementById('MN-totalCase').textContent = cases_MN;
document.getElementById('MN-deathsCase').textContent = deaths_MN;
document.getElementById('MN-newCase').textContent = newCases_MN;
// MN

cases_MO = data[24].actuals.cases.toLocaleString("en-US")
deaths_MO = data[24].actuals.deaths.toLocaleString("en-US")
newCases_MO = data[24].actuals.newCases.toLocaleString("en-US")

document.getElementById('MO-totalCase').textContent = cases_MO;
document.getElementById('MO-deathsCase').textContent = deaths_MO;
document.getElementById('MO-newCase').textContent = newCases_MO;
// MO

cases_MS = data[26].actuals.cases.toLocaleString("en-US")
deaths_MS = data[26].actuals.deaths.toLocaleString("en-US")
newCases_MS = data[26].actuals.newCases.toLocaleString("en-US")

document.getElementById('MS-totalCase').textContent = cases_MS;
document.getElementById('MS-deathsCase').textContent = deaths_MS;
document.getElementById('MS-newCase').textContent = newCases_MS;
// MS

cases_MT = data[27].actuals.cases.toLocaleString("en-US")
deaths_MT = data[27].actuals.deaths.toLocaleString("en-US")
newCases_MT = data[27].actuals.newCases.toLocaleString("en-US")

document.getElementById('MT-totalCase').textContent = cases_MT;
document.getElementById('MT-deathsCase').textContent = deaths_MT;
document.getElementById('MT-newCase').textContent = newCases_MT;
// MT

cases_NC = data[28].actuals.cases.toLocaleString("en-US")
deaths_NC = data[28].actuals.deaths.toLocaleString("en-US")
newCases_NC = data[28].actuals.newCases.toLocaleString("en-US")

document.getElementById('NC-totalCase').textContent = cases_NC;
document.getElementById('NC-deathsCase').textContent = deaths_NC;
document.getElementById('NC-newCase').textContent = newCases_NC;
// NC

cases_ND = data[29].actuals.cases.toLocaleString("en-US")
deaths_ND = data[29].actuals.deaths.toLocaleString("en-US")
newCases_ND = data[29].actuals.newCases.toLocaleString("en-US")

document.getElementById('ND-totalCase').textContent = cases_ND;
document.getElementById('ND-deathsCase').textContent = deaths_ND;
document.getElementById('ND-newCase').textContent = newCases_ND;
// ND

cases_NE = data[30].actuals.cases.toLocaleString("en-US")
deaths_NE = data[30].actuals.deaths.toLocaleString("en-US")
newCases_NE = data[30].actuals.newCases.toLocaleString("en-US")

document.getElementById('NE-totalCase').textContent = cases_NE;
document.getElementById('NE-deathsCase').textContent = deaths_NE;
document.getElementById('NE-newCase').textContent = newCases_NE;
// NE

cases_NH = data[31].actuals.cases.toLocaleString("en-US")
deaths_NH = data[31].actuals.deaths.toLocaleString("en-US")
newCases_NH = data[31].actuals.newCases.toLocaleString("en-US")

document.getElementById('NH-totalCase').textContent = cases_NH;
document.getElementById('NH-deathsCase').textContent = deaths_NH;
document.getElementById('NH-newCase').textContent = newCases_NH;
// NH

cases_NJ = data[32].actuals.cases.toLocaleString("en-US")
deaths_NJ = data[32].actuals.deaths.toLocaleString("en-US")
newCases_NJ = data[32].actuals.newCases.toLocaleString("en-US")

document.getElementById('NJ-totalCase').textContent = cases_NJ;
document.getElementById('NJ-deathsCase').textContent = deaths_NJ;
document.getElementById('NJ-newCase').textContent = newCases_NJ;
// NJ

cases_NM = data[33].actuals.cases.toLocaleString("en-US")
deaths_NM = data[33].actuals.deaths.toLocaleString("en-US")
newCases_NM = data[33].actuals.newCases.toLocaleString("en-US")

document.getElementById('NM-totalCase').textContent = cases_NM;
document.getElementById('NM-deathsCase').textContent = deaths_NM;
document.getElementById('NM-newCase').textContent = newCases_NM;
// NM

cases_NV = data[34].actuals.cases.toLocaleString("en-US")
deaths_NV = data[34].actuals.deaths.toLocaleString("en-US")
newCases_NV = data[34].actuals.newCases.toLocaleString("en-US")

document.getElementById('NV-totalCase').textContent = cases_NV;
document.getElementById('NV-deathsCase').textContent = deaths_NV;
document.getElementById('NV-newCase').textContent = newCases_NV;
// NV

cases_OH = data[35].actuals.cases.toLocaleString("en-US")
deaths_OH = data[35].actuals.deaths.toLocaleString("en-US")
newCases_OH = data[35].actuals.newCases.toLocaleString("en-US")

document.getElementById('OH-totalCase').textContent = cases_OH;
document.getElementById('OH-deathsCase').textContent = deaths_OH;
document.getElementById('OH-newCase').textContent = newCases_OH;
// OH

cases_OK = data[36].actuals.cases.toLocaleString("en-US")
deaths_OK = data[36].actuals.deaths.toLocaleString("en-US")
newCases_OK = data[36].actuals.newCases.toLocaleString("en-US")

document.getElementById('OK-totalCase').textContent = cases_OK;
document.getElementById('OK-deathsCase').textContent = deaths_OK;
document.getElementById('OK-newCase').textContent = newCases_OK;
// OK

cases_OR = data[37].actuals.cases.toLocaleString("en-US")
deaths_OR = data[37].actuals.deaths.toLocaleString("en-US")
newCases_OR = data[37].actuals.newCases.toLocaleString("en-US")

document.getElementById('OK-totalCase').textContent = cases_OK;
document.getElementById('OK-deathsCase').textContent = deaths_OK;
document.getElementById('OK-newCase').textContent = newCases_OK;
// OK

cases_OR = data[38].actuals.cases.toLocaleString("en-US")
deaths_OR = data[38].actuals.deaths.toLocaleString("en-US")
newCases_OR = data[38].actuals.newCases.toLocaleString("en-US")

document.getElementById('OR-totalCase').textContent = cases_OR;
document.getElementById('OR-deathsCase').textContent = deaths_OR;
document.getElementById('OR-newCase').textContent = newCases_OR;
// OR

cases_PA = data[39].actuals.cases.toLocaleString("en-US")
deaths_PA = data[39].actuals.deaths.toLocaleString("en-US")
newCases_PA = data[39].actuals.newCases.toLocaleString("en-US")

document.getElementById('PA-totalCase').textContent = cases_PA;
document.getElementById('PA-deathsCase').textContent = deaths_PA;
document.getElementById('PA-newCase').textContent = newCases_PA;
// PA

cases_RI = data[41].actuals.cases.toLocaleString("en-US")
deaths_RI = data[41].actuals.deaths.toLocaleString("en-US")
newCases_RI = data[41].actuals.newCases.toLocaleString("en-US")

document.getElementById('RI-totalCase').textContent = cases_RI;
document.getElementById('RI-deathsCase').textContent = deaths_RI;
document.getElementById('RI-newCase').textContent = newCases_RI;
// RI

cases_SC = data[42].actuals.cases.toLocaleString("en-US")
deaths_SC = data[42].actuals.deaths.toLocaleString("en-US")
newCases_SC = data[42].actuals.newCases.toLocaleString("en-US")

document.getElementById('SC-totalCase').textContent = cases_SC;
document.getElementById('SC-deathsCase').textContent = deaths_SC;
document.getElementById('SC-newCase').textContent = newCases_SC;
// SC

cases_SD = data[43].actuals.cases.toLocaleString("en-US")
deaths_SD = data[43].actuals.deaths.toLocaleString("en-US")
newCases_SD = data[43].actuals.newCases.toLocaleString("en-US")

document.getElementById('SD-totalCase').textContent = cases_SD;
document.getElementById('SD-deathsCase').textContent = deaths_SD;
document.getElementById('SD-newCase').textContent = newCases_SD;
// SD

cases_TN = data[44].actuals.cases.toLocaleString("en-US")
deaths_TN = data[44].actuals.deaths.toLocaleString("en-US")
newCases_TN = data[44].actuals.newCases.toLocaleString("en-US")

document.getElementById('TN-totalCase').textContent = cases_TN;
document.getElementById('TN-deathsCase').textContent = deaths_TN;
document.getElementById('TN-newCase').textContent = newCases_TN;
// TN

cases_TX = data[45].actuals.cases.toLocaleString("en-US")
deaths_TX = data[45].actuals.deaths.toLocaleString("en-US")
newCases_TX = data[45].actuals.newCases.toLocaleString("en-US")

document.getElementById('TX-totalCase').textContent = cases_TX;
document.getElementById('TX-deathsCase').textContent = deaths_TX;
document.getElementById('TX-newCase').textContent = newCases_TX;
// TX

cases_UT = data[46].actuals.cases.toLocaleString("en-US")
deaths_UT = data[46].actuals.deaths.toLocaleString("en-US")
newCases_UT = data[46].actuals.newCases.toLocaleString("en-US")

document.getElementById('UT-totalCase').textContent = cases_UT;
document.getElementById('UT-deathsCase').textContent = deaths_UT;
document.getElementById('UT-newCase').textContent = newCases_UT;
// UT

cases_VA = data[47].actuals.cases.toLocaleString("en-US")
deaths_VA = data[47].actuals.deaths.toLocaleString("en-US")
newCases_VA = data[47].actuals.newCases.toLocaleString("en-US")

document.getElementById('VA-totalCase').textContent = cases_VA;
document.getElementById('VA-deathsCase').textContent = deaths_VA;
document.getElementById('VA-newCase').textContent = newCases_VA;
// VA

cases_VT = data[48].actuals.cases.toLocaleString("en-US")
deaths_VT = data[48].actuals.deaths.toLocaleString("en-US")
newCases_VT = data[48].actuals.newCases.toLocaleString("en-US")

document.getElementById('VT-totalCase').textContent = cases_VT;
document.getElementById('VT-deathsCase').textContent = deaths_VT;
document.getElementById('VT-newCase').textContent = newCases_VT;
// 

cases_WA = data[49].actuals.cases.toLocaleString("en-US")
deaths_WA = data[49].actuals.deaths.toLocaleString("en-US")
newCases_WA = data[49].actuals.newCases.toLocaleString("en-US")

document.getElementById('WA-totalCase').textContent = cases_WA;
document.getElementById('WA-deathsCase').textContent = deaths_WA;
document.getElementById('WA-newCase').textContent = newCases_WA;
// WA

cases_WI = data[50].actuals.cases.toLocaleString("en-US")
deaths_WI = data[50].actuals.deaths.toLocaleString("en-US")
newCases_WI = data[50].actuals.newCases.toLocaleString("en-US")

document.getElementById('WI-totalCase').textContent = cases_WI;
document.getElementById('WI-deathsCase').textContent = deaths_WI;
document.getElementById('WI-newCase').textContent = newCases_WI;
// WI

cases_WV = data[51].actuals.cases.toLocaleString("en-US")
deaths_WV = data[51].actuals.deaths.toLocaleString("en-US")
newCases_WV = data[51].actuals.newCases.toLocaleString("en-US")

document.getElementById('WV-totalCase').textContent = cases_WV;
document.getElementById('WV-deathsCase').textContent = deaths_WV;
document.getElementById('WV-newCase').textContent = newCases_WV;
// WV

cases_WY = data[52].actuals.cases.toLocaleString("en-US")
deaths_WY = data[52].actuals.deaths.toLocaleString("en-US")
newCases_WY = data[52].actuals.newCases.toLocaleString("en-US")

document.getElementById('WY-totalCase').textContent = cases_WY;
document.getElementById('WY-deathsCase').textContent = deaths_WY;
document.getElementById('WY-newCase').textContent = newCases_WY;
// WY
}
getCovid()
// calls the getCovid function
