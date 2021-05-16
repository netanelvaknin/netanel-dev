import { AboutStyle } from "./AboutStyle";
import profileImage from "../../assets/images/profile-image.jpg";
import { useSmallScreen } from "../../hooks";

function About() {
  const isSmallScreen = useSmallScreen();

  return (
    <AboutStyle>
      {!isSmallScreen && (
        <div>
          <img src={profileImage} />
        </div>
      )}

      <div>
        <strong style={{ display: "block", lineHeight: "0.6" }}>
          היי, נעים מאוד!
        </strong>
        <br />
        <p>שמי נתנאל וקנין, אני מתכנת פרונט-אנד בשנה השלישית לקריירה שלי.</p>
        <p>
          כיום אני עובד בחברת{" "}
          <a href="https://www.555.co.il" target="_blank">
            ביטוח ישיר
          </a>{" "}
          כחלק מצוות הפרונט-אנד שמפתח בריאקט.
        </p>
        <br />
        <p>
          את הבלוג הזה הקמתי בראש ובראשונה מהסיבה הפשוטה שאני פשוט אוהב ללמד, זה
          מה שעושה לי טוב.
        </p>
        <p>
          מעבר לכך, האינטרנט עמוס בתוכן שקשור לתכנות ולפרונט-אנד בפרט אבל תוכן
          בעברית תמיד היה חסר לי בתור מתכנת מתחיל. תוכן שבאמת מסביר את הנושאים
          המסובכים בשפה שאני יודע הכי טוב.
        </p>
        <br />
        <p>
          כחלק מתהליך הלמידה הבלתי נפסק שלי, אשמח לשתף אתכם במסע שאני עובר,
          בכלים החדשים שאני מתמקצע בהם ועוד...
        </p>
        <br />
        <p>
          השאיפה שלי בעזרת הבלוג הזה להיות מקור ידע להמון מתכנתים שנמצאים בתחילת
          דרכם, לעזור להם, לכוון אותם ולפשט להם את הנושאים המורכבים.
        </p>
        <p>אני מקווה שהתכנים שתקראו בבלוג הזה יהיו רלוונטים ויועילו לכם.</p>
        <br />
        <strong>קריאה מהנה ובהצלחה!</strong>
      </div>
    </AboutStyle>
  );
}

export default About;
