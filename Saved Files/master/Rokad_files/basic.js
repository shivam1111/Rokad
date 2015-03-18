var k1 = 0
var l1 = 0
var i1 = 0;
var j1 = 0;
var perm_i1 = 1;
var perm_j1 = 1;

var i2 = 0;
var j2 = 0;
var l2 = 0;
var k2 = 0
var perm_i2 = 1;
var perm_j2 = 1;
var stop1 = 0;
var stop2 = 0;
final_line_counter = 0;

function divone_print(doc){
	if (stop1 == 0){
		var line_counter = 15;
	    var nof1 = $('div.divfamily.d1').length;
		for (i=i1;i<nof1;i++){
			family = $('div.divfamily.d1')[i];
			if (perm_i1 == 1){
				family_total = $(family).find('input.parent.total')[0].value; 
				family_description = $(family).find('input.parent.desc')[0].value;
				if(line_counter +5 <= 280){
					doc.line(0, line_counter+1,104.5 , line_counter+1);
					doc.text(3,line_counter,family_total);
					doc.setFontType("bold");
					doc.text(23,line_counter,family_description);
					line_counter +=5;					
				} 
				else{
			    	i1 = i;
			    	j1 = 0;
			    	k1 = 0;
			    	l1 = 0;
			    	perm_i1 = 1;
			    	perm_j1 = 1;
			    	return doc					
				}

			}
		    if (line_counter > 290) {
		    	i1 = i;
		    	j1 = 0;
		    	k1 = 0;
		    	l1 = 0;
		    	perm_i1 = 0;
		    	perm_j1 = 1;
		    	return doc
		    }
			doc.setFontType("normal");
			family_name = $('div.divfamily.d1')[i].classList[2];
			for (j=j1;j< $('div.subfamily.'+family_name).length;j++){
				sub_family  = $('div.subfamily.'+family_name)[j];
				total = $(sub_family).find('input.total')[0].value;
				if (perm_j1  == 1 && (line_counter + 5) <= 290){
					doc.text(23,line_counter,total);				
				}
				desc_element = $(sub_family).find('input.desc');
				value_element = $(sub_family).find('input.value');
				horizantal = 43;
				desc_line_counter = 0;
				for (k = k1; k < desc_element.length; k++){
					if (horizantal > 83){
						horizantal = 43;
						desc_line_counter += 10;
					}
					
					if ((desc_line_counter + line_counter - 5) == 290){
						break;
					}
					
					if ((line_counter + 5) > 290){
						break;
//				    	i1 = i;
//				    	j1 = j;
//				    	k1 = k;
//				    	l1 = k;
//				    	perm_i1 = 0;
//				    	perm_j1 = 1;
//				    	return doc												
					}
					if ((line_counter + desc_line_counter + 5) > 290 ){
						break;
//				    	i1 = i;
//				    	j1 = j;
//				    	k1 = k;
//				    	l1 = k;
//				    	perm_i1 = 0;
//				    	perm_j1 = 0;
//				    	return doc						
					}
					doc.text(horizantal,line_counter + desc_line_counter,desc_element[k].value);
					horizantal +=20;
				}
				line_counter +=5;
				horizantal = 43;
				for (l = l1; l < value_element.length; l++){
					if (horizantal > 83){
						horizantal = 43;
						line_counter += 10;
						if (line_counter > 290){
					    	i1 = i;
					    	j1 = j;
					    	k1 = l;
					    	l1 = l;
					    	perm_i1 = 0;
					    	perm_j1 = 0;
					    	return doc
						}
					}
					if (line_counter > 290){
				    	i1 = i;
				    	j1 = j;
				    	k1 = l;
				    	l1 = l;
				    	perm_i1 = 0;
				    	perm_j1 = 1;
				    	return doc
					}
					doc.text(horizantal,line_counter,value_element[l].value);
					horizantal += 20;
				}				
				line_counter +=5;
				doc.line(23,line_counter - 4, 104.5,line_counter-4);
				perm_i1 = 1;
				perm_j1 = 1;
				l1 = 0;
				k1 = 0;
			}
			l1 = 0;
			k1 = 0;
			j1 = 0;
			perm_i1 = 1;
			perm_j1 = 1;
		}
		stop1 = 1;
	}
	if (line_counter > final_line_counter){
		final_line_counter = line_counter;
	}
	return doc;
}

function divtwo_print(doc){
	if (stop2 == 0){
		var line_counter = 15;
	    var nof2 = $('div.divfamily.d2').length;
		for (i=i2;i<nof2;i++){
			family = $('div.divfamily.d2')[i];
			if (perm_i2 == 1){
				if (line_counter + 5 <= 280){
					doc.line(104.5, line_counter+1,210 , line_counter+1);
					family_total = $(family).find('input.parent.total')[0].value; 
					family_description = $(family).find('input.parent.desc')[0].value;
					doc.text(107,line_counter,family_total);
					doc.setFontType("bold");
					doc.text(127,line_counter,family_description);
					line_counter +=5;					
				}
				else{
			    	i2 = i;
			    	j2 = 0;
			    	k2 = 0;
			    	l2 = 0;
			    	perm_i2 = 1;
			    	perm_j2 = 1;
			    	return doc					
				}
			}
		    if (line_counter > 290) {
		    	i2 = i;
		    	j2 = 0;
		    	k2 = 0;
		    	l2 = 0;
		    	perm_i2 = 0;
		    	perm_j2 = 1;
		    	return doc
		    }
			doc.setFontType("normal");
			family_name = $('div.divfamily.d2')[i].classList[2];
			for (j=j2;j< $('div.subfamily.'+family_name).length;j++){
				sub_family  = $('div.subfamily.'+family_name)[j];
				total = $(sub_family).find('input.total')[0].value;
				if (perm_j2  == 1 && (line_counter + 5) <= 290){
					doc.text(127,line_counter,total);				
				}
				desc_element = $(sub_family).find('input.desc');
				value_element = $(sub_family).find('input.value');
				horizantal = 147;
				desc_line_counter = 0;
				for (k = k1; k < desc_element.length; k++){
					if (horizantal > 187){
						horizantal = 147;
						desc_line_counter += 10;
					}
					
					if ((desc_line_counter + line_counter - 5) == 290){
						break;
					}
					
					if ((line_counter + 5) > 290){
						break;
//				    	i1 = i;
//				    	j1 = j;
//				    	k1 = k;
//				    	l1 = k;
//				    	perm_i1 = 0;
//				    	perm_j1 = 1;
//				    	return doc												
					}
					if ((line_counter + desc_line_counter + 5) > 290 ){
						break;
//				    	i1 = i;
//				    	j1 = j;
//				    	k1 = k;
//				    	l1 = k;
//				    	perm_i1 = 0;
//				    	perm_j1 = 0;
//				    	return doc						
					}
					doc.text(horizantal,line_counter + desc_line_counter,desc_element[k].value);
					horizantal +=20;
				}
				line_counter +=5;
				horizantal = 147;
				for (l = l1; l < value_element.length; l++){
					if (horizantal > 187){
						horizantal = 147;
						line_counter += 10;
						if (line_counter > 290){
					    	i2 = i;
					    	j2 = j;
					    	k2 = l;
					    	l2 = l;
					    	perm_i2 = 0;
					    	perm_j2 = 0;
					    	return doc
						}
					}
					if (line_counter > 290){
				    	i2 = i;
				    	j2 = j;
				    	k2 = l;
				    	l2 = l;
				    	perm_i2 = 0;
				    	perm_j2 = 0;
				    	return doc
					}
					doc.text(horizantal,line_counter,value_element[l].value);
					horizantal += 20;
				}				
				line_counter +=5;
				doc.line(127,line_counter - 4, 210,line_counter-4);
				perm_i2 = 1;
				perm_j2 = 1;
				l2 = 0;
				k2 = 0;
			}
			l2 = 0;
			k2 = 0;
			j2 = 0;
			perm_i2 = 1;
			perm_j2 = 1;
		}
		stop2 = 1;
	}
	if (line_counter > final_line_counter){
		final_line_counter = line_counter;
	}	
	return doc;
}

function print_report(){
	var doc = new jsPDF();
	doc.setFontSize(15);
	var s= document.getElementById('main-heading');
	text = s.value;
	// this is the code to place the string right in the center
	var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(textOffset, 10, text);
    doc.setFontSize(11);
    //Counting the number of families of div1 and div2
    var nof1 = $('div.divfamily.d1').length;
    var nof2 = $('div.divfamily.d2').length;
    var noud1 = $('div.up.d1').length;
    var nodd1 = $('div.down.d1').length;
    var noud2 = $('div.up.d2').length;
    var nodd2 = $('div.down.d2').length;
    total_line1 = nof1 + noud1*2; 
    total_line2 = nof2 + noud2*2 ;
    total_page = 0;
    doc.setLineWidth(0.5);
    doc.line(0,11,210,11);
    doc.setLineWidth(0.2);
//    doc.line(104.5, 16, 104.5, 291);

    if (total_line1 >= total_line1){
    	total_page = parseInt(total_line1/55);
    	if (total_line1 % 55 != 0){
    		total_page ++; 
    	}    	
    } 
    if (total_line2 > total_line1){
    	total_page = parseInt(total_line2/55);
    	if (total_line2 % 55 != 0){
    		total_page ++; 
    	}    	
    }
	console.log("Total Page required are -:",total_page);
    // if in all there is only one page then --
	doc.setFontSize(10.5);
	// printing the div 1 first
	if (total_page == 1){
		docs = divone_print(doc);
		doc = divtwo_print(docs);
		doc.setLineWidth(0.5);
		var sum_left =  document.getElementById('sum-left');
		var sum_right = document.getElementById('sum-right');
		if (!parseInt(sum_left.value)){sum_left.value = parseInt(0);}
		if (!parseInt(sum_right.value)){sum_right.value = parseInt(0);}
		if (final_line_counter <= 275){
			doc.line(0,final_line_counter,210,final_line_counter);
			doc.text(3,final_line_counter+5,sum_left.value+" :Total");
			doc.text(107,final_line_counter+5,sum_right.value+" :Total");
			doc.line(0,final_line_counter+6,210,final_line_counter+6);
			doc.text(107,final_line_counter+10,"Cash in Hand -: "+(parseInt(sum_left.value) - parseInt(sum_right.value)));
			doc.line(0,final_line_counter+11,210,final_line_counter+11);
			doc.setLineWidth(0.1);
			doc.line(104.5,11,104.5,final_line_counter+11)
		}		
		else{
			doc.setLineWidth(0.1);
			doc.line(104.5,16,104.5,final_line_counter);
			doc.addPage();
			doc.setLineWidth(0.5);
			doc.line(0,15,210,15);
			doc.text(3,20,sum_left.value+" :Total");
			doc.text(107,20,sum_right.value+" :Total");
			doc.line(0,21,210,21);
			doc.text(107,25,"Cash in Hand -: "+(parseInt(sum_left.value) - parseInt(sum_right.value)));
			doc.line(0,26,210,26);
			doc.setLineWidth(0.1);
			doc.line(104.5,15,104.5,26);
		}
		doc.save('Test.pdf');		
		
	}
	else{
		if (total_line1 > total_line2){
			for (var i=1;i<=total_page;i++){
				docs = divone_print(doc);
				doc = divtwo_print(docs);
				doc.line(104.5,11,104.5,final_line_counter);
				if (i < total_page){
					doc.line(104.5,16,104.5,291);
					doc.addPage();
					final_line_counter = 15;
				}
			}
		}
		else{
			for (var i=1;i<=total_page;i++){
				docs = divtwo_print(doc);
				doc = divone_print(docs);
				doc.line(104.5,11,104.5,final_line_counter);
				if (i < total_page){
					doc.line(104.5,16,104.5,291);
					doc.addPage();
					final_line_counter = 15;
				}
			}
		}
		doc.setLineWidth(0.5);
		var sum_left =  document.getElementById('sum-left');
		var sum_right = document.getElementById('sum-right');
		if (!parseInt(sum_left.value)){sum_left.value = 0;}
		if (!parseInt(sum_right.value)){sum_right.value = 0;}
		if (final_line_counter <= 275){
			console.log("final_line_counter:",final_line_counter);
			doc.line(0,final_line_counter,210,final_line_counter);
			doc.text(3,final_line_counter+5,sum_left.value+" :Total");
			doc.text(107,final_line_counter+5,sum_right.value+" :Total");
			doc.line(0,final_line_counter+6,210,final_line_counter+6);
			doc.text(107,final_line_counter+10,"Cash in Hand -: "+(parseInt(sum_left.value) - parseInt(sum_right.value)));
			doc.line(0,final_line_counter+11,210,final_line_counter+11);
			doc.setLineWidth(0.1);
			doc.line(104.5,final_line_counter,104.5,final_line_counter+11);
		}		
		else{
			doc.addPage();
			doc.line(0,15,210,15);
			doc.text(3,20,sum_left.value+" :Total");
			doc.text(107,20,sum_right.value+" :Total");
			doc.line(0,21,210,21);
			doc.text(107,25,"Cash in Hand -: "+(parseInt(sum_left.value) - parseInt(sum_right.value)));
			doc.line(0,26,210,26);
			doc.setLineWidth(0.1);
			doc.line(104.5,15,104.5,26);
			
		}
		doc.save('Test.pdf');
	}
	i1 = 0;
	j1 = 0;
    l1 = 0;
    k1 = 0;
    perm_i1 = 1;
    perm_j1 = 1;
    
	i2 = 0;
	j2 = 0;
	l2 = 0;
	k2 = 0;
	perm_i2 = 1;
	perm_j2 = 1;
	stop1 = 0;
	stop2 = 0;		
}

    // Calculating the total number of lines
// Save the PDF
//    var div1 = $('div.divfamily.d1');
//    var current_page = 1;
//    var current_line = 1;
//    var curernt_index = 15;
//    var sum = 0;
//    var description = '';
//    for (i = 0; i < nof1 ; i++){
//    	current_family = div1[i];
//    	divparent = $(current_family).find('div.divparent.d1');
//    	parent_desc =  $(divparent).find('div.first-node');
//    	console.log("******************************",parent_desc);
//    	//    	console.log("=================================",parent_sum[0].value);
//    	// counting the number of subfamilies in the current family
//    	nosf = $(current_family).find('.subfamily.d1').length;
//    	// running a loop for each subfamily
////    	doc.addPage();
//    }

function demoTwoPageDocument() {
	var doc = new jsPDF();
	doc.text(20, 20, 'Hello world!');
	doc.text(20, 25, 'This is client-side Javascript, pumping out a PDF.');
	doc.addPage();
	doc.text(20, 20, 'Do you like that?');
	
	// Save the PDF
	doc.save('Test.pdf');
}

function demoLandscape() {
	var doc = new jsPDF('landscape');
	doc.text(20, 20, 'Hello landscape world!');

	// Save the PDF
	doc.save('Test.pdf');
}

function demoFontSizes() {
	var doc = new jsPDF();
	doc.setFontSize(22);
	doc.text(20, 20, 'This is a title');
	
	doc.setFontSize(16);
	doc.text(20, 30, 'This is some normal sized text underneath.');
	
	doc.save('Test.pdf');
}

function demoFontTypes() {
	var doc = new jsPDF();
	
	doc.text(20, 20, 'This is the default font.');
	
	doc.setFont("courier");
	doc.setFontType("normal");
	doc.text(20, 30, 'This is courier normal.');
	
	doc.setFont("times");
	doc.setFontType("italic");
	doc.text(20, 40, 'This is times italic.');
	
	doc.setFont("helvetica");
	doc.setFontType("bold");
	doc.text(20, 50, 'This is helvetica bold.');
	
	doc.setFont("courier");
	doc.setFontType("bolditalic");
	doc.text(20, 60, 'This is courier bolditalic.');
	
	doc.save('Test.pdf');
}

function demoTextColors() {
	var doc = new jsPDF();

	doc.setTextColor(100);
	doc.text(20, 20, 'This is gray.');
	
	doc.setTextColor(150);
	doc.text(20, 30, 'This is light gray.');
	
	doc.setTextColor(255,0,0);
	doc.text(20, 40, 'This is red.');
	
	doc.setTextColor(0,255,0);
	doc.text(20, 50, 'This is green.');
	
	doc.setTextColor(0,0,255);
	doc.text(20, 60, 'This is blue.');
	
	// Output as Data URI
	doc.output('datauri');
}

function demoMetadata() {
	var doc = new jsPDF();
	doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
	
	// Optional - set properties on the document
	doc.setProperties({
		title: 'Title',
		subject: 'This is the subject',
		author: 'James Hall',
		keywords: 'generated, javascript, web 2.0, ajax',
		creator: 'MEEE'
	});
	
	doc.save('Test.pdf');
}

function demoUserInput() {	
	var name = prompt('What is your name?');
	var multiplier = prompt('Enter a number:');
	multiplier = parseInt(multiplier);

	var doc = new jsPDF();
	doc.setFontSize(22);	
	doc.text(20, 20, 'Questions');
	doc.setFontSize(16);
	doc.text(20, 30, 'This belongs to: ' + name);
	
	for(var i = 1; i <= 12; i ++) {
		doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ___');
	}
	
	doc.addPage();
	doc.setFontSize(22);
	doc.text(20, 20, 'Answers');
	doc.setFontSize(16);
	
	for (i = 1; i <= 12; i ++) {
		doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ' + (i * multiplier));
	}
	doc.save('Test.pdf');
	
}

function demoRectangles() {
	var doc = new jsPDF();

	doc.rect(20, 20, 10, 10); // empty square

	doc.rect(40, 20, 10, 10, 'F'); // filled square
	
	doc.setDrawColor(255, 0, 0);
	doc.rect(60, 20, 10, 10); // empty red square
	
	doc.setDrawColor(255, 0, 0);
	doc.rect(80, 20, 10, 10, 'FD'); // filled square with red borders
	
	doc.setDrawColor(0);
	doc.setFillColor(255, 0, 0);
	doc.rect(100, 20, 10, 10, 'F'); // filled red square
	
	doc.setDrawColor(0);
	doc.setFillColor(255, 0, 0);
	doc.rect(120, 20, 10, 10, 'FD'); // filled red square with black borders

	doc.setDrawColor(0);
	doc.setFillColor(255, 255, 255);
	doc.roundedRect(140, 20, 10, 10, 3, 3, 'FD'); //  Black sqaure with rounded corners

	doc.save('Test.pdf');
}

function demoLines() {
	var doc = new jsPDF();

	doc.line(20, 20, 60, 20); // horizontal line
		
	doc.setLineWidth(0.5);
	doc.line(20, 25, 60, 25);
	
	doc.setLineWidth(1);
	doc.line(20, 30, 60, 30);
	
	doc.setLineWidth(1.5);
	doc.line(20, 35, 60, 35);
	
	doc.setDrawColor(255,0,0); // draw red lines
	
	doc.setLineWidth(0.1);
	doc.line(100, 20, 100, 60); // vertical line
	
	doc.setLineWidth(0.5);
	doc.line(105, 20, 105, 60);
	
	doc.setLineWidth(1);
	doc.line(110, 20, 110, 60);
	
	doc.setLineWidth(1.5);
	doc.line(115, 20, 115, 60);
	
	// Output as Data URI
	doc.output('datauri');
}

function demoCircles() {
	var doc = new jsPDF();

	doc.ellipse(40, 20, 10, 5);

	doc.setFillColor(0,0,255);
	doc.ellipse(80, 20, 10, 5, 'F');
	
	doc.setLineWidth(1);
	doc.setDrawColor(0);
	doc.setFillColor(255,0,0);
	doc.circle(120, 20, 5, 'FD');

	doc.save('Test.pdf');
}

function demoTriangles() {
	var doc = new jsPDF();

	doc.triangle(60, 100, 60, 120, 80, 110, 'FD');
	
	doc.setLineWidth(1);
	doc.setDrawColor(255,0,0);
	doc.setFillColor(0,0,255);
	doc.triangle(100, 100, 110, 100, 120, 130, 'FD');
	
	doc.save('Test.pdf');
}

function demoImages() {
	// Because of security restrictions, getImageFromUrl will
	// not load images from other domains.  Chrome has added
	// security restrictions that prevent it from loading images
	// when running local files.  Run with: chromium --allow-file-access-from-files --allow-file-access
	// to temporarily get around this issue.
	var getImageFromUrl = function(url, callback) {
		var img = new Image(), data, ret = {
			data: null,
			pending: true
		};
		
		img.onError = function() {
			throw new Error('Cannot load image: "'+url+'"');
		};
		img.onload = function() {
			var canvas = document.createElement('canvas');
			document.body.appendChild(canvas);
			canvas.width = img.width;
			canvas.height = img.height;

			var ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0);
			// Grab the image as a jpeg encoded in base64, but only the data
			data = canvas.toDataURL('image/jpeg').slice('data:image/jpeg;base64,'.length);
			// Convert the data to binary form
			data = atob(data);
			document.body.removeChild(canvas);

			ret['data'] = data;
			ret['pending'] = false;
			if (typeof callback === 'function') {
				callback(data);
			}
		};
		img.src = url;

		return ret;
	};

	// Since images are loaded asyncronously, we must wait to create
	// the pdf until we actually have the image data.
	// If we already had the jpeg image binary data loaded into
	// a string, we create the pdf without delay.
	var createPDF = function(imgData) {
		var doc = new jsPDF();

		doc.addImage(imgData, 'JPEG', 10, 10, 50, 50);
		doc.addImage(imgData, 'JPEG', 70, 10, 100, 120);

		doc.save('output.pdf');

	}

	getImageFromUrl('thinking-monkey.jpg', createPDF);
}

function demoStringSplitting() {

	var pdf = new jsPDF('p','in','letter')
	, sizes = [12, 16, 20]
	, fonts = [['Times','Roman'],['Helvetica',''], ['Times','Italic']]
	, font, size, lines
	, margin = 0.5 // inches on a 8.5 x 11 inch sheet.
	, verticalOffset = margin
	, loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.'

	// Margins:
	pdf.setDrawColor(0, 255, 0)
		.setLineWidth(1/72)
		.line(margin, margin, margin, 11 - margin)
		.line(8.5 - margin, margin, 8.5-margin, 11-margin)

	// the 3 blocks of text
	for (var i in fonts){
		if (fonts.hasOwnProperty(i)) {
			font = fonts[i]
			size = sizes[i]

			lines = pdf.setFont(font[0], font[1])
						.setFontSize(size)
						.splitTextToSize(loremipsum, 7.5)
			// Don't want to preset font, size to calculate the lines?
			// .splitTextToSize(text, maxsize, options)
			// allows you to pass an object with any of the following:
			// {
			// 	'fontSize': 12
			// 	, 'fontStyle': 'Italic'
			// 	, 'fontName': 'Times'
			// }
			// Without these, .splitTextToSize will use current / default
			// font Family, Style, Size.
			console.log(lines);
			pdf.text(0.5, verticalOffset + size / 72, lines)

			verticalOffset += (lines.length + 0.5) * size / 72
		}
	}

	pdf.save('Test.pdf');
}

function demoFromHTML() {
	var pdf = new jsPDF('p', 'pt', 'letter')

	// source can be HTML-formatted string, or a reference
	// to an actual DOM element from which the text will be scraped.
	, source = $('#fromHTMLtestdiv')[0]

	// we support special element handlers. Register them with jQuery-style 
	// ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
	// There is no support for any other type of selectors 
	// (class, of compound) at this time.
	, specialElementHandlers = {
		// element with id of "bypass" - jQuery style selector
		'#bypassme': function(element, renderer){
			// true = "handled elsewhere, bypass text extraction"
			return true
		}
	}

	margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    	source // HTML string or DOM elem ref.
    	, margins.left // x coord
    	, margins.top // y coord
    	, {
    		'width': margins.width // max width of content on PDF
    		, 'elementHandlers': specialElementHandlers
    	},
    	function (dispose) {
    	  // dispose: object with X, Y of the last line add to the PDF 
    	  //          this allow the insertion of new lines after html
          pdf.save('Test.pdf');
        },
    	margins
    )
}
