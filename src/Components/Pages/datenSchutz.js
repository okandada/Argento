import BgImageComponent from "../BackgroundimageComponent/backGroundImage";
import BackgroundImage from "../../Images/Home/Desktop/Fotos/Hero.png";
import React from "react";
import "./datenSchutz.css";

export const DatenSchutz = () => {
  return (
    <div>
      <BgImageComponent
        image={BackgroundImage}
        DashSize={"35%"}
        HeadingSize={"h2"}
        Heading="Datenschutz"
      />
      <h3 className="headerText">
        Zweck und Rechtsgrundlage der Datenverarbeitung
      </h3>
      <p className="paraText">
        Wir speichern Ihre Daten nur zur Erfüllung Ihrer Anfragen, Erfüllung und
        Abwicklung der Verträge und zu eigenen Werbezwecken. Die Verarbeitung
        erfolgt auf Basis der aktuellen Datenschutzgesetze. Wenn Sie eine
        Anfrage haben, von uns ein Angebot erstellen lassen oder mit uns einen
        Vertrag abschließen, verarbeiten wir Ihre personenbezogenen Daten. Je
        nach Art des Vertrages handelt es sich dabei um Ihre(n) Namen, Vornamen,
        Anschrift, E-Mail-Adresse, Telefonnummer/Faxnummer, ggfs.
        Geburtsdaten/Ort, Bankdaten, Umsatzsteuer-ID. Diese Daten speichern und
        verarbeiten wir in unserer Kundenverwaltung zur Erfüllung und Abwicklung
        des Vertrages sowie zu eigenen Werbezwecken. Eine Weitergabe an sonstige
        Dritte erfolgt nicht.
      </p>

      <h3
        className="headerText"
        style={{ color: "#ecbd46", fontSize: "1.7rem" }}
      >
        Webanalyse mit Google Analytics
      </h3>
      <p
        className="paraText"
        style={{ wordBreak: "break-word", fontSize: "1.5rem" }}
      >
        Diese Website benutzt Google Analytics, einen Webanalysedienst der
        Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“,
        Textdateien, die auf Ihrem Computer gespeichert werden und die eine
        Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den
        Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden
        in der Regel an einen Server von Google in den USA übertragen und dort
        gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser
        Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von
        Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten
        des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur
        in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
        in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
        Website wird Google diese Informationen benutzen, um Ihre Nutzung der
        Website auszuwerten, um Reports über die Websiteaktivitäten
        zusammenzustellen und um weitere mit der Websitenutzung und der
        Internetnutzung verbundene Dienstleistungen gegenüber dem
        Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von
        Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von
        Google zusammengeführt. Sie können die Speicherung der Cookies durch
        eine entsprechende Einstellung Ihrer Software verhindern; wir weisen Sie
        jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
        sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.
        Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten
        und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
        IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google
        verhindern, indem sie das unter dem folgenden Link
        (http://tools.google.com/dlpage/gaoptout?hl=de) verfügbare
        Browser-Plugin herunterladen und installieren. Nähere Informationen
        hierzu finden Sie unter http://tools.google.com/dlpage/gaoptout?hl=de
        bzw. unter http://www.google.com/intl/de/analytics/privacyoverview.html
        (allgemeine Informationen zu Google Analytics und Datenschutz). Wir
        weisen Sie darauf hin, dass auf dieser Webseite Google Analytics um den
        Code „gat._anonymizeIp();“ erweitert wurde, um eine anonymisierte
        Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.
      </p>

      <h3
        className="headerText"
        style={{ color: "#ecbd46", fontSize: "1.7rem" }}
      >
        Verwendung von Cookies
      </h3>
      <p
        className="paraText"
        style={{ wordBreak: "break-word", fontSize: "1.5rem" }}
      >
        Verwendung von Cookies Auf unserer Website verwenden wir
        Session-Cookies, um Ihnen die Nutzung unserer Webseiten zu erleichtern.
        Dabei handelt es sich um kleine Textdateien, welche für die Dauer Ihres
        Besuchs auf unsere Webseite auf Ihrer Festplatte gespeichert und
        abhängig von der Einstellung Ihres Browser-Programms beim Beenden des
        Browsers wieder gelöscht werden. Das Speichern von Cookies kann in den
        Einstellungen Ihres Browsers ausgeschaltet oder deaktiviert werden.
        Session-Cookies werden automatisch gelöscht wenn Sie Ihren Browser
        schließen. Persistent-Cookies überdauern das Schließen des Browsers.
        Datenverarbeitung zu Werbezwecken Wir nutzen Ihre Daten nur für eigene
        Werbezwecke. Wir möchten Sie über neue Produkte, unsere
        Serviceleistungen sowie interessante Veranstaltungen informieren. Daher
        nutzen wir Ihre Daten auch, um Ihnen über Ihre Käufe hinaus bestimmte
        Produkte, Serviceleistungen oder Veranstaltungen zu empfehlen, die Sie
        interessieren könnten. Die Auswertung der Kaufhistorie und der Versand
        entsprechender Werbung per Post oder E-Mail an Bestandskunden erfolgt
        unter Beachtung Ihrer berechtigten Interessen nur für Produkte und
        Serviceleistungen der Centracon AG. Die Versendung per E-Mail erfolgt
        nur mit Ihrer Einwilligung, die Sie mit Wirkung für die Zukunft
        jederzeit widerrufen können.
      </p>
      {/* <Link to="/home">
        <img
          style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
          src={logo}
          alt=""
        />
      </Link> */}
    </div>
  );
};

export default DatenSchutz;
