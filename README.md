# LegendaryDKC.github.io
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>滑稽永不为奴</title>
		<link rel="stylesheet" href="2333 (5)/index.css" type="text/css"/>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
		
		<!--
		<link rel="icon" href="gif_favicon.gif" type="image/gif">
		-->
	</head>
	<body>
		<div class="BOXside">
		<div class="main">
			<div class="ceiling"><h1 align="middle">影视管理界面</h1></div>
			<div class="ceiling1"></div>
			<div class="BoX">
				<div class="box">
					<!--已存在记录-->
					
				</div>
				<div class="left">
					 <!--输入记录-->
			 <form action="#" method="post" enctype="multipart/form-data" name="form" method="POST" id="movieform">
			 	<table cellspacing="0" cellpadding="10" class="formlist">
			 	    <tr>
						<td>上传缩略图：</td>
			 	        <div align="center">
						<td>
							<input type="file" accept="image/*" name="pictureupload" id="uploadimg" onchange="var vpn_return;eval(vpn_rewrite_js((function () { showPic(this) }).toString().slice(14, -2), 2));return vpn_return;" onclick="var vpn_return;eval(vpn_rewrite_js((function () { changeimg() }).toString().slice(14, -2), 2));return vpn_return;"><br>
			 	            <!-- <img src="image/电影.png" id="preview" width="79" height="109"> -->
						</td>
						</div>
			 	    </tr>
			 	    <tr>
			 	        <td>影视名称：</td>
			 	        <td><input type="text" placeholder="请输入影视名称" name="moviename" id="mname"></td>
			 	    </tr>
			 	    <tr>
				<td>影视类别：</td>
				<td><select name="kindofmovie" id="komovie">
				<option>喜剧</option>
				<option>灾难</option>
				<option>悬疑</option>
				<option>恐怖</option>
				<option>主旋律</option>
				<option>战争</option>
				<option>青春爱情</option>
				<option>科幻</option>
			</select></td>
		</th>
			<tr>
				<td>主演：</td>
				<td><input type="text" placeholder="请输入主演名称" name="actorname" id="aname"></td>
			</tr>
			<tr>
			<td>评分：</td>
					 <td><input type="text" placeholder="请输入评分" name="moviescore" id="mscore"></td>
				</tr>
				<tr>
			 	    <td>上映时间：</td>
			 	    <td><input type="date" value="now" id="mdate"></td>
			 	 </tr>
			 	<tr>
			 	    <td>审核情况：</td>
				    <td>
			        <input type="radio" value="已审核" name="moviecheck" id="mcheck">已审核
				        <input type="radio" value="未审核" name="moviecheck" id="mcheck">未审核
				    </td>
			 	</tr>
			 	<tr>
					   <td>剧情介绍：</td>
				    <td><textarea name="movieintroduce" id="mintroduce" cols="25" rows="15" ></textarea></td>
			 	</tr>
			 	</table>
			 	</form>
					<div align="center">
						<input type="button" id="save" value="保存" onclick="var vpn_return;eval(vpn_rewrite_js((function () { save() }).toString().slice(14, -2), 2));return vpn_return;">
					</div>
				</div>
			</div>
		</div>
			<div class="floor"></div>
		</div>
		</div>
		<script type="text/javascript">
		
		</script>
	</body>
</html>
