<%

On Error Resume Next
Session("FP_OldCodePage") = Session.CodePage
Session("FP_OldLCID") = Session.LCID
Session.CodePage = 1252
Session.LCID = 1033
Err.Clear

strErrorUrl = ""

If Request.ServerVariables("REQUEST_METHOD") = "POST" Then
If Request.Form("VTI-GROUP") = "0" Then
	Err.Clear

	Set fp_conn =  Server.CreateObject("ADODB.Connection")
	FP_DumpError strErrorUrl, "Cannot create connection"

	Set fp_rs = Server.CreateObject("ADODB.Recordset")
	FP_DumpError strErrorUrl, "Cannot create record set"

	fp_conn.Open Application("comments_ConnectionString")
	FP_DumpError strErrorUrl, "Cannot open database"

	fp_rs.Open "Results", fp_conn, 1, 3, 2 ' adOpenKeySet, adLockOptimistic, adCmdTable
	FP_DumpError strErrorUrl, "Cannot open record set"

	fp_rs.AddNew
	FP_DumpError strErrorUrl, "Cannot add new record set to the database"
	Dim arFormFields0(3)
	Dim arFormDBFields0(3)
	Dim arFormValues0(3)

	arFormFields0(0) = "Comment"
	arFormDBFields0(0) = "Comment"
	arFormValues0(0) = Request("Comment")
	arFormFields0(1) = "Name"
	arFormDBFields0(1) = "Name"
	arFormValues0(1) = Request("Name")
	arFormFields0(2) = "Page"
	arFormDBFields0(2) = "Page"
	arFormValues0(2) = Request("Page")

	FP_SaveFormFields fp_rs, arFormFields0, arFormDBFields0

	FP_SaveFieldToDB fp_rs, Now, "Date"
	If Request.ServerVariables("REMOTE_USER") <> "" Then
		FP_SaveFieldToDB fp_rs, Request.ServerVariables("REMOTE_USER"), "User_name"
	End If

	fp_rs.Update
	FP_DumpError strErrorUrl, "Cannot update the database"

	fp_rs.Close
	fp_conn.Close

	FP_FormConfirmation "text/html; charset=windows-1252",_
						"Form Confirmation",_
						"Thank you for submitting the following information:",_
						"missing_layers.asp",_
						"Return to the form."

End If
End If

Session.CodePage = Session("FP_OldCodePage")
Session.LCID = Session("FP_OldLCID")

%>
<html>

<head>
<meta http-equiv="Content-Language" content="en-us">
<meta name="GENERATOR" content="Microsoft FrontPage 5.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<title>4.10 Missing Layers</title>
<base>
<style fprolloverstyle>A:hover {color: #FF0000}
</style>
<link rel="stylesheet" type="text/css" href="../../coursetheme.css">
</head>

<body>

<!--webbot bot="Include" U-Include="../header_tutorial_4.htm" TAG="BODY" startspan -->

<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td><a href="http://www.austhink.com">
	<img border="0" src="../../images/AUSTHINK-LOGO---FULL.jpg" width="89" height="70"></a></td>
    <td>
    </td>
    </tr>
  <tr>
    <td bgcolor="#EFEFEF"><font size="2"><b>
	<nobr><A HREF="../../index.htm" TARGET="" STYLE="{text-decoration: none;}">Home</A></nobr>&nbsp;/&nbsp;<nobr><A HREF="../index.htm" TARGET="" STYLE="{text-decoration: none;}">Tutorial&nbsp;4</A></nobr></b></font></td>
    <td bgcolor="#EFEFEF">
    <div align="right">



<p><font size="2">
    <b>
    </b></font></p>

</div>
    </td>
  </tr>
  <tr>
    <td colspan="2"><b><font size="4">
</font></b></td>
  </tr>
</table>

<!--webbot bot="Include" i-checksum="8113" endspan -->
<!--webbot bot="Include" U-Include="missing_layers_text.htm" TAG="BODY" startspan -->

<p>Sometimes arguments are presented with a <b>whole layer missing</b> between 
the evidence and the <span lang="en-au">contention</span>.</p>
<table border="0" cellpadding="5" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" id="AutoNumber2">
  <tr>
    <td valign="middle" align="left" style="border-style: none; border-width: medium">
	&nbsp;<p>There 
    is a sizeable gap between the objection and the <span lang="en-au">
    contention</span>. One sign of a 
    big gap is that the Rabbit rule is not satisfied at all, i.e., there is no 
    overlap in significant terms or concepts between the <span lang="en-au">
    contention</span> and the 
    objection.&nbsp; </p>
    <p>The argument is really a multi-layer argument, but a layer does not 
    currently appear on the map.</td>
    <td valign="middle" align="left" style="border-style: none; border-width: medium">
	<img border="0" src="missin20.jpg"></td>
  </tr>
  <tr>
    <td valign="middle" align="left" style="border-style: none; border-width: medium">
	<p>One 
    way to fix this &quot;missing layer&quot; problem. Notice that the objection has 
    become supporting evidence for a higher-level objection.</p>
    <p>&nbsp;</td>
    <td valign="middle" align="left" style="border-style: none; border-width: medium">
	<p>
	<img border="0" src="missin21.jpg"></td>
  </tr>
  <tr>
    <td valign="middle" align="left" style="border-style: none; border-width: medium">
	Another way to fix the problem. In this case the objection 
    is treated as providing evidence against a reason to believe that the 
    astronauts did land on the Moon.</td>
    <td valign="middle" align="left" style="border-style: none; border-width: medium">
	<p>
	<img border="0" src="missin22.jpg"></td>
  </tr>
</table>

<!--webbot bot="Include" i-checksum="22168" endspan --><table border="0" cellpadding="10" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="50%" id="AutoNumber3" bgcolor="#E5E5E5">
  <tr>
    <td width="100%">
    <!--webbot bot="Include" U-Include="../../Comments_Template/intro.htm" TAG="BODY" startspan --><strong>[Comments_Template/intro.htm]</strong><!--webbot bot="Include" i-checksum="1276" endspan --><!--webbot bot="DatabaseRegionStart" s-columnnames="Key,Name,Comment,Date,Page,User_name,Spare" s-columntypes="3,202,203,135,202,202,202" s-dataconnection="comments" b-tableformat="FALSE" b-menuformat="FALSE" s-menuchoice="Comment" s-menuvalue="Comment" b-tableborder="TRUE" b-tableexpand="TRUE" b-tableheader="TRUE" b-listlabels="FALSE" b-listseparator="FALSE" i-listformat="1" b-makeform="FALSE" s-recordsource="Results" s-displaycolumns="Comment,Name" s-criteria="[Page] EQ [T4_missing_layers] |" s-order s-sql="SELECT * FROM Results WHERE (Page =  'T4_missing_layers')" b-procedure="FALSE" clientside suggestedext="asp" s-defaultfields s-norecordsfound="no comments yet" i-maxrecords="256" i-groupsize="0" botid="0" u-dblib="../../_fpclass/fpdblib.inc" u-dbrgn1="../../_fpclass/fpdbrgn1.inc" u-dbrgn2="../../_fpclass/fpdbrgn2.inc" tag="BODY" preview="&lt;table border=0 width=&quot;100%&quot;&gt;&lt;tr&gt;&lt;td bgcolor=&quot;#FFFF00&quot; align=&quot;left&quot;&gt;&lt;font color=&quot;#000000&quot;&gt;This is the start of a Database Results region. The page must be fetched from a web server with a web browser to display correctly; the current web is stored on your local disk or network.&lt;/font&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;" b-WasTableFormat="FALSE" startspan --><!--#include file="../../_fpclass/fpdblib.inc"-->
<% if 0 then %>
<SCRIPT Language="JavaScript">
document.write("<div style='background: yellow; color: black;'>The Database Results component on this page is unable to display database content. The page must have a filename ending in '.asp', and the web must be hosted on a server that supports Active Server Pages.</div>");
</SCRIPT>
<% end if %>
<%
fp_sQry="SELECT * FROM Results WHERE (Page =  'T4_missing_layers')"
fp_sDefault=""
fp_sNoRecords="no comments yet"
fp_sDataConn="comments"
fp_iMaxRecords=256
fp_iCommandType=1
fp_iPageSize=0
fp_fTableFormat=False
fp_fMenuFormat=False
fp_sMenuChoice="Comment"
fp_sMenuValue="Comment"
fp_iDisplayCols=2
fp_fCustomQuery=False
BOTID=0
fp_iRegion=BOTID
%>
<!--#include file="../../_fpclass/fpdbrgn1.inc"-->
<!--webbot bot="DatabaseRegionStart" endspan --><p>
    <!--webbot bot="DatabaseResultColumn" s-columnnames="Key,Name,Comment,Date,Page,User_name,Spare" s-column="Comment" b-tableformat="FALSE" b-hashtml="FALSE" b-makelink="FALSE" clientside b-MenuFormat preview="&lt;font size=&quot;-1&quot;&gt;&amp;lt;&amp;lt;&lt;/font&gt;Comment&lt;font size=&quot;-1&quot;&gt;&amp;gt;&amp;gt;&lt;/font&gt;" startspan --><%=FP_FieldVal(fp_rs,"Comment")%><!--webbot bot="DatabaseResultColumn" endspan --><br>
    By:
    <!--webbot bot="DatabaseResultColumn" s-columnnames="Key,Name,Comment,Date,Page,User_name,Spare" s-column="Name" b-tableformat="FALSE" b-hashtml="FALSE" b-makelink="FALSE" clientside b-MenuFormat preview="&lt;font size=&quot;-1&quot;&gt;&amp;lt;&amp;lt;&lt;/font&gt;Name&lt;font size=&quot;-1&quot;&gt;&amp;gt;&amp;gt;&lt;/font&gt;" startspan --><%=FP_FieldVal(fp_rs,"Name")%><!--webbot bot="DatabaseResultColumn" endspan --></p>
    <!--webbot bot="DatabaseRegionEnd" b-tableformat="FALSE" b-menuformat="FALSE" u-dbrgn2="../../_fpclass/fpdbrgn2.inc" i-groupsize="0" clientside tag="BODY" preview="&lt;table border=0 width=&quot;100%&quot;&gt;&lt;tr&gt;&lt;td bgcolor=&quot;#FFFF00&quot; align=&quot;left&quot;&gt;&lt;font color=&quot;#000000&quot;&gt;This is the end of a Database Results region.&lt;/font&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;" startspan --><!--#include file="../../_fpclass/fpdbrgn2.inc"-->
<!--webbot bot="DatabaseRegionEnd" endspan --><!--webbot bot="Include" U-Include="../../Comments_Template/submission.htm" TAG="BODY" startspan --><strong>[Comments_Template/submission.htm]</strong><!--webbot bot="Include" i-checksum="26698" endspan --><p>
    </p>
    <!--webbot BOT="GeneratedScript" PREVIEW=" " startspan --><script Language="JavaScript" Type="text/javascript"><!--
function FrontPage_Form1_Validator(theForm)
{

  if (theForm.Comment.value == "")
  {
    alert("Please enter a value for the \"Comment\" field.");
    theForm.Comment.focus();
    return (false);
  }

  if (theForm.Comment.value.length < 1)
  {
    alert("Please enter at least 1 characters in the \"Comment\" field.");
    theForm.Comment.focus();
    return (false);
  }

  if (theForm.Name.value.length > 255)
  {
    alert("Please enter at most 255 characters in the \"Name\" field.");
    theForm.Name.focus();
    return (false);
  }
  return (true);
}
//--></script><!--webbot BOT="GeneratedScript" endspan --><form METHOD="POST" onsubmit="return FrontPage_Form1_Validator(this)" language="JavaScript" name="FrontPage_Form1" action="missing_layers.asp" webbot-action="--WEBBOT-SELF--">
      <!--webbot bot="SaveDatabase" suggestedext="asp" u-asp-include-url="../../_fpclass/fpdbform.inc" s-dataconnection="comments" s-recordsource="Results" u-database-url="../../fpdb/comments.mdb" s-builtin-fields="Timestamp REMOTE_USER" s-builtin-dbfields="Date User_name" s-form-fields="Comment Name Page" s-form-dbfields="Comment Name Page" startspan --><input TYPE="hidden" NAME="VTI-GROUP" VALUE="0"><!--#include file="../../_fpclass/fpdbform.inc"--><!--webbot bot="SaveDatabase" endspan i-checksum="43152" -->
      <p>&nbsp;
      <!--webbot bot="Validation" s-display-name="Comment" s-data-type="String" b-value-required="TRUE" i-minimum-length="1" --><textarea rows="10" name="Comment" cols="64"></textarea><br>
      Your name (optional):
      <!--webbot bot="Validation" s-display-name="Name" s-data-type="String" b-value-required="False" i-maximum-length="255" --><input type="TEXT" name="Name" size="27" value maxlength="255"><br>
      </p>
      <p><input type="submit" value="  Submit  ">&nbsp;&nbsp;
      <input type="reset" value=" Reset "></p>
      <input type="hidden" name="Page" value="T4_missing_layers">
    </form>
    </td>
  </tr>
</table>
<!--webbot bot="Include" U-Include="../../Reusable/footer_page.htm" TAG="BODY" startspan -->

<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td height="26" bgcolor="#EFEFEF"><font size="2"><b>&nbsp;<a href="../../Glossary/index.htm">Glossary</a> 
    | <a href="../../contents.htm">Contents</a>
    </b></font></td>
    <td height="26" bgcolor="#EFEFEF">
    <p align="right"><b><font size="2">
    </font></b><font size="2"> </font></td>
  </tr>
  <tr>
    <td colspan="2">
    

<p><font face="Verdana" size="1">Copyright � Austhink 2003-2006</font></p>

</td>
  </tr>
</table>

<!--webbot bot="Include" i-checksum="25151" endspan --><p>
<font size="1">&nbsp;Last updated
<!--webbot bot="Timestamp" S-Type="EDITED" S-Format="%d-%b-%Y" startspan -->28-Aug-2007<!--webbot bot="Timestamp" i-checksum="15674" endspan --></font></p>

</body>

</html>