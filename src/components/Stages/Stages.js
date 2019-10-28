import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  label: {
    '& .MuiStepLabel-iconContainer': {
        paddingLeft: '8px',
        paddingRight: '0'
    }
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['הפרדת המעשר', 'הכנות', 'ברכות', 'המעשר'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `תחילה יש להסיר מעט יותר מ 1% ולאחר מכן לומר את נוסח הפרשת תרומות ומעשרות במלואו.
       לעתים יש לברך על ההפרשה ולעתים אין לברך עליה, בהתאם להנחיות שיש בנוסח ההפרשה. 
       אף שאנו משתמשים בביטוי "הפרשת תרומות ומעשרות", בפועל חלק מההפרשות
        נעשות על ידי ציון מקום המתנות ו"קריאת שם" בלבד (מעשר-ראשון ומעשר-שני או מעשר עני).
         רק את המתנות שאסור לאוכלם בסיום ההפרשה (תרומה גדולה ותרומת מעשר), אותם בלבד מסירים לפני ההפרשה.`;
    case 1:
      return `1.	יש לוודא שיש ברשותך מטבע, שיש בה מספיק פרוטות למספר החילולים הנדרש בהפרשה זו.
       למנויים ב"בית האוצר" יש מטבע מתאימה ב"בית האוצר".
      2.	לוקחים מעט יותר ממאית מכל אחד ממיני הפירות או הירקות שרוצים לתקן, מניחים בצד, ואומרים את הנוסח הבא:
      בטבל ודאי, יש לברך לפני אמירת הנוסח. על הפרשה מספק אין לברך.
      `;
    case 2:
      return `בָּרוּךְ אַתָּה יי אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו  וְצִוָּנוּ לְהַפְרִישׁ תְּרוּמוֹת וּמַעַשְׂרוֹת.
 
      מָה שֶׁאֹמַר עַכְשָׁו יָחוּל עַל כָּל מִין בְּנִפְרָד:
      הַמֵּאִית הַנִּמְצֵאת בְּתַחְתִּית שֶׁל מַה שֶׁהִנַּחְתִּי בַּצַּד -  תִּשָּׁאֵר בֵּינְתַיִם טֶבֶל.
      שְׁאָר מַה שֶׁהִנַּחְתִּי בַּצַּד - הֲרֵי הוּא תְּרוּמָה גְּדוֹלָה עַל הַכֹּל.
      הַמֵּאִית שֶׁהִזְכַּרְתִּי וְעוֹד תֵּשַׁע מֵאִיּוֹת בַּצַּד הָעֶלְיוֹן  שֶׁל מַה שֶׁבִּרְצוֹנִי לְתַקֵּן, הֲרֵי הֵן מַעֲשֵׂר רִאשׁוֹן.
      הַמֵּאִית שֶׁהִזְכַּרְתִּי - הֲרֵי הִיא תְּרוּמַת מַעֲשֵׂר.
      עוֹד תֵּשַׁע מֵאִיּוֹת בַּצַּד הַתַּחְתּוֹן שֶׁל מַה שֶׁבִּרְצוֹנִי לְתַקֵּן -  הֲרֵי הֵן מַעֲשֵׂר שֵׁנִי, וְאִם צָרִיךְ לְהַפְרִישׁ מַעֲשַׂר עָנִי - הֲרֵי הֵן מַעֲשַׂר עָנִי.  
       
      במעשר שני ודאי, יש לברך לפני אמירת נוסח החילול. על חילול מספק אין לברך.
       
      בָּרוּךְ אַתָּה יי אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לִפְדּוֹת מַעֲשֵׁר שֵׁנִי.
      מַה שֶׁקָּבַעְתִּי לְמַעֲשֵׂר שֵׁנִי בְּתוֹסֶפֶת רֶבַע מֵעֶרְכּוֹ - הֲרֵי הוּא מְחֻלָּל, כָּל דַּרְגַּת חִיּוּב עַל פְּרוּטָה וְרֶבַע בְּנִפְרָד,  בַּמַּטְבֵּעַ הַמְּיֹעֶדֶת לְכָךְ, בִּשְׁבִילִי.
      וְאִם יֵשׁ כָּאן פֵּרוֹת רְבָעִי,  הֲרֵי הֵם בְּתוֹסֶפֶת רֶבַע מֵעֶרְכָּן, מְחֻלָלִים,  כָּל דַּרְגַּת חִיּוּב עַל פְּרוּטָה וְרֶבַע בְּנִפְרָד,  בַּמַּטְבֵּעַ הַמְּיֹעֶדֶת לְכָךְ בִּשְׁבִילִי.
      `;
    case 3: 
      return `לאחר אמירת נוסח ההפרשה, עוטפים את הפירות המונחים בצד בשקית בתוך שקית ומניחים באשפה.
       אם הפירות חייבים בוודאות בהפרשה (טבל ודאי), נותנים את המעשר הראשון ללוי, ובשנת מעשר עני,
        נותנים את מעשר העני לעני. (גם בפירות שאינם טבל ודאי).`;
    default:
      return 'לא ידוע';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel className={classes.label}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    חזור
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'סיימתי!' : 'לשלב הבא'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>כל הכבוד! בתיאבון!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            התחל מחדש
          </Button>
        </Paper>
      )}
    </div>
  );
}
