function load_data(data,signal){
	if (parseInt(signal) == 0){
		console.log("Building data for the left side",data,signal);
		element = "";
		for (i=0;i < data.length;i++){
			element = element + "<option value='"+data[i]+"' />\n";
		}
	    $('#left').append($(element));
	}
	if (parseInt(signal) == 1){
		console.log("Building data for the right side",data,signal);
		element = "";
		for (i=0;i < data.length;i++){
			element = element + "<option value='"+data[i]+"' />\n";
		}
	    $('#right').append($(element));
	}
}

function lock_document(){
	length = $('input').length;
	elements = $('input');
	id = "";
	style="";
	classes = "";
	element = "";
	value = "";
	on_chnage = "";
	type = "";
	list = "";
	for (i=0;i<length;i++){
		element = "<div"
		if ($(elements.get(i)).attr('list')){
			list = $(elements.get(i)).attr('list');
		    element = element + " list='"+list+"'";
		}		
		if ($(elements.get(i)).attr('type')){
			type = $(elements.get(i)).attr('type');
		    element = element + " type='"+type+"'";
		}
		if ($(elements.get(i)).attr('style')){
			style = $(elements.get(i)).attr('style');
		    element = element + " style='"+style+"'";
		}
		if ($(elements.get(i)).attr('id')){
			id = $(elements.get(i)).attr('id');
			element  = element + " id='"+id+"'";
		}
		if ($(elements.get(i)).attr('onchange')){
			on_change = $(elements.get(i)).attr('onchange');
			element = element + " onchange='"+on_change+"'";
		}
		if ($(elements.get(i)).attr('class')){
	          classes = $(elements.get(i)).attr('class');
		      classes = classes +" convert";
		}
		else{
		  classes = classes +" convert";
		}
		element  = element + " class='"+classes+"'";
		value = elements[i].value;
		element = element + " >"+value+"</div>";
		$(elements.get(i)).replaceWith(element);	
	    id = "";
	    style="";
	    classes = "";
	    element = "";
	    value = "";
	    on_change = "";
	    type ="";
	    list = "";
	}
//Cookies.set('theme', 'green', {expiry : 3600},path= '../Rokad/cookie');
//	$.ajax({
//	      type:'get',
//	      url:'trial.py'
//	      cache:false,
//	      data:{name:'name'}
//	      async:,
//	      dataType:json, //if you want json
//	      success: function(data) {
//	        console.log("Success");
//	    }
//	      error:functionfunction(data) {
//	    	  console.log("Failiure");
//	    }
//	   }
//	 );
//	});
}

function unlock_document(){
	length = $('.convert').length;
	elements = $('.convert');
	id = "";
	style="";
	classes = "";
	element = "";
	value = "";
	on_change = "";
	type ="";
	list ="";
	for (i=0;i<length;i++){
		element = "<input"
		if ($(elements.get(i)).attr('list')){
			list = $(elements.get(i)).attr('list');
		    element = element + " list='"+list+"'";
		}		
		if ($(elements.get(i)).attr('type')){
		type = $(elements.get(i)).attr('type');
	    element = element + " type='"+type+"'";
	    }			
		if ($(elements.get(i)).attr('style')){
			style = $(elements.get(i)).attr('style');
		    element = element + " style='"+style+"'";
		}
		if ($(elements.get(i)).attr('id')){
			id = $(elements.get(i)).attr('id');
			element  = element + " id='"+id+"'";
		}
		if ($(elements.get(i)).attr('onchange')){
			on_change = $(elements.get(i)).attr('onchange');
			element = element + " onchange='"+on_change+"'";
		}		
		if ($(elements.get(i)).attr('class')){
	          classes = $(elements.get(i)).attr('class');
		      classes = classes.split("convert"); 
              if (classes[0] != " "){
        		element  = element + " class='"+classes[0]+"'";		      
		      }  
		}
		value = elements[i].innerHTML;
		if (value){
		    element = element + " value='"+value+"'";
		}
		element = element + " />";
		$(elements.get(i)).replaceWith(element);
	    id = "";
	    style="";
	    classes = "";
	    element = "";
	    value = "";
	    on_change = "";
	    type ="";
	    list="";
	}

}
//function save_report(){
//	console.log("********************");
//	 $.ajax({
//		 type:"get", 
//		 url: "save.php", //this is the php file
//		 data: { name: "John", location: "Boston" },
//		});
//}//this is the js code

function createDownloadLink(anchorSelector, str, fileName){
	if(window.navigator.msSaveOrOpenBlob) {
        var fileData = [str];
        blobObject = new Blob(fileData);
        $(anchorSelector).click(function(){
            window.navigator.msSaveOrOpenBlob(blobObject, fileName);
        });
    } else {
        var url = "data:text/plain;charset=utf-8," + encodeURIComponent(str);
        $(anchorSelector).attr("download",fileName);               
        $(anchorSelector).attr("href", url);
    }
}

function family_total_onchange(element){
	console.log("Entered the onchange of family",element);
	class_list = element.classList;
	if (class_list[1] == 'd1'){
		console.log("The div is ",class_list[1]);
		family_element = $('#div1').find('input.parent.total.'+class_list[1]);
		var total  = 0 ;
		for (i =0;i<family_element.length;i++){
			if (parseInt(family_element[i].value)){
				total += parseInt(family_element[i].value);
			}
		}		
		console.log("The total of the family in the div1 is -:",total);
		$('#sum-left')[0].value = total;
	}
	if (class_list[1] == 'd2'){
		family_element = $('#div2').find('input.parent.total.'+class_list[1]);
		var total  = 0 ;
		for (i =0;i<family_element.length;i++){
			if (parseInt(family_element[i].value)){
				total += parseInt(family_element[i].value);
			}
		}		
		$('#sum-right')[0].value = total;		
	}
}
function subfamily_total_onchange(element){
	all_total_element =  $(element.parentNode.parentNode.parentNode).find('input.total.special');
	var total_family = 0;
	for (j=0;j < all_total_element.length;j++){
		if (parseInt(all_total_element[j].value)){
			total_family += parseInt(all_total_element[j].value);
		}
	}
	family_element = $(element.parentNode.parentNode.parentNode.parentNode).find('input.total.parent');
	family_element[0].value = total_family;
	if ($(element).hasClass('d1')){
		var total = 0;
		elements = $('div.d1').find('input.parent.total');
		for (i =0; i < elements.length;i++){
			if (parseInt(elements[i].value)){
				total += parseInt(elements[i].value);
			}
		}
		$('#sum-left')[0].value = total;
	}
	if ($(element).hasClass('d2')){
		var total = 0;
		elements = $('div.d2').find('input.parent.total');
		for (i =0; i < elements.length;i++){
			if (parseInt(elements[i].value)){
				total += parseInt(elements[i].value);
			}
		}
		$('#sum-right')[0].value = total;
	}	
	
}

function nodes_total_delete(parent_nodes,family){
	if (parent_nodes){
		value_element = parent_nodes.find('input.value');
		var total = 0;
		for (i = 0;i < value_element.length;i++){
			if (parseInt(value_element[i].value)){
				total += parseInt(value_element[i].value);
			}
		}
		total_element = parent_nodes.find('input.total.special');
		total_element[0].value = total;
		all_total_element =  parent_nodes.find('input.total.special');
		var total_family = 0;
		for (j=0;j < all_total_element.length;j++){
			if (parseInt(all_total_element[j].value)){
				total_family += parseInt(all_total_element[j].value);
			}
		}
		family_element = $(parent_nodes[0].parentNode.parentNode).find('input.total.parent');
		family_element[0].value = total_family;		
		if ($(parent_nodes).hasClass('d1')){
			var total = 0;
			elements = $('div.d1').find('input.parent.total');
			for (i =0; i < elements.length;i++){
				total += parseInt(elements[i].value);
			}
			$('#sum-left')[0].value = total;
		}
		if ($(parent_nodes).hasClass('d2')){
			var total = 0;
			elements = $('div.d2').find('input.parent.total');
			for (i =0; i < elements.length;i++){
				total += parseInt(elements[i].value);
			}
			$('#sum-right')[0].value = total;
		}
	}
	else{
		total_element = family.find('input.total.special')
		var total = 0;
		for (i = 0;i < total_element.length;i++){
			if (total_element[i].value){
				total += parseInt(total_element[i].value);
			}
		}
		parent_total_element = family.find('input.total.parent');
		parent_total_element[0].value = total;
		if ($(family).hasClass('d1')){
			var total = 0;
			elements = $('div.d1').find('input.parent.total');
			for (i =0; i < elements.length;i++){
				total += parseInt(elements[i].value);
			}
			$('#sum-left')[0].value = total;
		}
		if ($(family).hasClass('d2')){
			var total = 0;
			elements = $('div.d2').find('input.parent.total');
			for (i =0; i < elements.length;i++){
				total += parseInt(elements[i].value);
			}
			$('#sum-right')[0].value = total;
		}		
	}
}

function nodes_total(element){
	value_element = $(element.parentNode.parentNode).find('input.value');
	var total = 0;
	for (i = 0;i < value_element.length;i++){
		if (parseInt(value_element[i].value)){
			total += parseInt(value_element[i].value);
		}
	}
	total_element = $(element.parentNode.parentNode).find('input.total.special');
	total_element[0].value = total;
	all_total_element =  $(element.parentNode.parentNode.parentNode).find('input.total.special');
	var total_family = 0;
	for (j=0;j < all_total_element.length;j++){
		if (parseInt(all_total_element[j].value)){
			total_family += parseInt(all_total_element[j].value);
		}
	}
	family_element = $(element.parentNode.parentNode.parentNode.parentNode).find('input.total.parent');
	family_element[0].value = total_family;
	if ($(element).hasClass('d1')){
		var total = 0;
		elements = $('div.d1').find('input.parent.total');
		for (i =0; i < elements.length;i++){
			if (parseInt(elements[i].value)){
				total += parseInt(elements[i].value);
			}
		}
		$('#sum-left')[0].value = total;
	}
	if ($(element).hasClass('d2')){
		var total = 0;
		elements = $('div.d2').find('input.parent.total');
		for (i =0; i < elements.length;i++){
			if (parseInt(elements[i].value)){
				total += parseInt(elements[i].value);
			}
		}
		$('#sum-right')[0].value = total;
	}	
}

function nextOnTabIndex(element) {
      var fields = $($('form')
                    .find('a[href], button, input, select, textarea')
                    .filter(':visible').filter(':enabled')
                    .toArray()
                    .sort(function(a, b) {
                      return ((a.tabIndex > 0) ? a.tabIndex : 1000) - ((b.tabIndex > 0) ? b.tabIndex : 1000);
                    }));


      return fields.eq((fields.index(element) + 1) % fields.length);
    }

function delete_function(x){
	console.log("A element is being deleted");
//	x.remove(); this refers to the cross sign itself
	console.log("The family being deleted is "+ x.classList[1]);
	parent_node = $(x).next();
	if($(x).hasClass('family1') || $(x).hasClass('family2')) {
		console.log("Cannot delete the first families");
	}
	else{
		$('.divfamily'+'.'+x.classList[1]).remove();
	}
	console.log("parent_node",parent_node);
	family_total_onchange(parent_node[0]);
	
}

function child_function(x){
	console.log("A Child element was clicked.The element clicked is ",x,event.target);
	if (event.keyCode == 37){
		console.log("The left key detected.The previous element is",$(event.target).prev());
		$(event.target).prev().focus();	
	}
	if (event.keyCode == 39){
		console.log("The right key detected.The next element is",$(event.target).next());
		$(event.target).next().focus();
	}
	if (event.ctrlKey){
		console.log("The ctrl arow key detected at the element ",event.target);
		console.log("The class list of the element is ",event.target.classList);
		class_list = event.target.classList;
		$("input.parent."+class_list[1]+"."+class_list[2]+".total").focus();
	}
	//Adding the deleting node functionality in order to facilitate the node bubbling  myindicator
	if (event.keyCode == 46){
		event.stopImmediatePropagation();
		if ($(event.srcElement).hasClass('special')){
			if ($(event.srcElement.parentNode.parentNode).next().hasClass('line')){
				$(event.srcElement.parentNode.parentNode).next().remove();
			}
			else
				{
					$(event.srcElement.parentNode.parentNode).prev().remove();
				}
			var family = $(event.srcElement.parentNode.parentNode.parentNode.parentNode);
			$(event.srcElement.parentNode.parentNode).remove();
			nodes_total_delete(null,family);
		}
		else {
			var div_pos = 0;
			console.log("Detected a delete button on the node");
			var parent_nodes = $(element.parentNode.parentNode);
			var sub_family = $(element.parentNode);
			no_div = $(event.srcElement.parentNode.parentNode).children('div').length;
			for (i=0;i < no_div ;i++){
				if (event.srcElement.parentNode == $(event.srcElement.parentNode.parentNode).children('div')[i]){
					div_pos = i ;
				}
			}
			console.log("The position of the src element div is ", div_pos);
			if ($(event.srcElement.parentNode).hasClass('up')){
			}
			console.log("The delete was detected on the normal node");
			//Deleting the nodes first
			column = event.srcElement.classList[4]
			if ($(event.srcElement).hasClass('desc')){
				var parent_nodes = $(event.srcElement.parentNode.parentNode);
				var family = $(event.srcElement.parentNode.parentNode.parentNode.parentNode);
				class_list = event.srcElement.parentNode.classList;
				class_list_element = $(event.srcElement.classList); 
				if ($(event.srcElement.parentNode).hasClass('first-node')){
					classes_div = "div."+class_list[0]+"."+class_list[1]+"."+class_list[2]+".down"+"."+class_list[4]
					classes_element = "input.child."+class_list_element[1]+"."+class_list_element[2]+".value."+class_list_element[4];
					element = $(classes_div).find(classes_element);
					$(element).remove();
					$(event.srcElement).remove();
					nodes_total_delete(parent_nodes,null);
				}
				else{
					if ($(event.srcElement.parentNode).children().length == 1){
						$(event.srcElement.parentNode).next().remove();
						$(event.srcElement.parentNode).remove();
						nodes_total_delete(parent_nodes,null);
					}
					else{
						classes_div = "div."+class_list[0]+"."+class_list[1]+"."+class_list[2]+".down"+"."+class_list[4]+"."+class_list[5];
						classes_element = "input.child."+class_list_element[1]+"."+class_list_element[2]+".value."+class_list_element[4];
						element = $(classes_div).find(classes_element);
						if ($(event.srcElement).hasClass("column1")){
							if ($(event.srcElement).next()[0]){
								$(event.srcElement).next()[0].style.left = "110px";
								$(element).next()[0].style.left = "110px";
								// Changing the class name of desc of 2nd column
								e = $(event.srcElement).next()[0];
								$(e).removeClass('column2');
								$(e).addClass('column1');
								//Chnaging the class name of numeric value of 2nd column
								e = $(element).next()[0];
								$(e).removeClass('column2');
								$(e).addClass('column1');
								$(element).remove();
								$(event.srcElement).remove();
								nodes_total_delete(parent_nodes,null);
							}
						}
						else {
								$(element).remove();
								$(event.srcElement).remove();	
								nodes_total_delete(parent_nodes,null);
						}
	
					}
				}
			}
			if ($(event.srcElement).hasClass('value')){
				var parent_nodes = $(event.srcElement.parentNode.parentNode);
				var family = $(event.srcElement.parentNode.parentNode.parentNode.parentNode);				
				class_list = event.srcElement.parentNode.classList;
				class_list_element = $(event.srcElement.classList); 
				if ($(event.srcElement.parentNode).hasClass('first-node')){
					classes_div = "div."+class_list[0]+"."+class_list[1]+"."+class_list[2]+".up"+"."+class_list[4];
					classes_element = "input.child."+class_list_element[1]+"."+class_list_element[2]+".desc."+class_list_element[4];
					element = $(classes_div).find(classes_element);
					$(element).remove();
					$(event.srcElement).remove();
					nodes_total_delete(parent_nodes,null);
				}
				else{
					if ($(event.srcElement.parentNode).children().length == 1){
						$(event.srcElement.parentNode).next().remove();
						$(event.srcElement.parentNode).remove();
						nodes_total_delete(null,family);
					}
					else{
						classes_div = "div."+class_list[0]+"."+class_list[1]+"."+class_list[2]+".up"+"."+class_list[4]+"."+class_list[5]
						classes_element = "input.child."+class_list_element[1]+"."+class_list_element[2]+".desc."+class_list_element[4];
						element = $(classes_div).find(classes_element);
						if ($(event.srcElement).hasClass("column1")){
							if ($(event.srcElement).next()[0]){
								$(event.srcElement).next()[0].style.left = "110px";
								$(element).next()[0].style.left = "110px";
								// Changing the classs name of desc of 2nd column
								e = $(event.srcElement).next()[0];
								$(e).removeClass('column2');
								$(e).addClass('column1');
								//Changing the class name of numeric value of 2nd column
								e = $(element).next()[0];
								$(e).removeClass('column2');
								$(e).addClass('column1');						
								$(element).remove();
								$(event.srcElement).remove();
								nodes_total_delete(parent_nodes,null);
							}
	
						}
						else{
							$(element).remove();
							$(event.srcElement).remove();			
							nodes_total_delete(parent_nodes,null);
						}
	
					}
			}
			//Printing the division children of the subfamily
			//calculating the position of the source element
		}			
	}

}	
	if (event.keyCode == 40){
		event.preventDefault();
		if($(event.target).hasClass('value')){
			console.log("the element on which the down key was pressed is ",event.target);
			class_list = event.target.classList; 
			console.log("The element is present in "+class_list[4]);
			next_node = $(event.target.parentNode).next();
			try{
				if ($(next_node).get(0).tagName == "BR"){
					console.log("The next node is BR....Skipping it");
					next_node = $(event.target.parentNode).next().next();
				}
			}
			catch (err){
				next_node = $(event.target.parentNode.parentNode).first();
			}
			console.log("The next node is ",next_node[0]);
			value_final = next_node[0].getElementsByClassName(class_list[4]);
			console.log("The next element is ",value_final);
			$(value_final).focus();
		}
		if($(event.target).hasClass('desc')){
			console.log("the element on which the down key was pressed is ",event.target);
			class_list = event.target.classList; 
			console.log("The element is present in "+class_list[4]);
			next_node = $(event.target.parentNode).next();
			if ($(next_node).get(0).tagName == "BR"){
				console.log("The next node is BR....Skipping it");
				next_node = $(event.target.parentNode).next().next();
			}
			console.log("The next node is ",next_node[0]);
			value_final = next_node[0].getElementsByClassName(class_list[4]);
			console.log("The next element is ",value_final);
			$(value_final).focus();
		}
		if ($(event.target).hasClass('total')){
			try {
				next_node = $(event.target.parentNode.parentNode).next().next().next();
				class_list = next_node[0].classList;
				console.log("The total element detected the down arrow");
				console.log("The class list of this element is ",event.target.parentNode.parentNode);
				console.log("The next node is -: ", next_node[0]);
				console.log("The class list of this element is ",class_list);
				$("div."+class_list[3]+"."+class_list[1]+"."+class_list[2]+".up.first-node > :first-child").focus();
			}
			catch(err){
				$("div.subfamily1" + "." + class_list[1] + "." + class_list[2] + ".up.first-node > :first-child").focus();
			}
		}
	}

	if (event.keyCode == 38){
		event.preventDefault();
		if($(event.target).hasClass('value')){
			console.log("the element on which the up key was pressed is ",event.target);
			class_list = event.target.classList; 
			console.log("The element is present in "+class_list[4]);
			prev_node = $(event.target.parentNode).prev();
			try {
				if ($(prev_node).get(0).tagName == "BR"){
					console.log("The previous node is BR....Skipping it");
					prev_node = $(event.target.parentNode).prev().prev();
				}
			}
			catch(err){
				prev_node = $(event.target.parentNode.parentNode.parentNode).last();
			}
			console.log("The previous node is ",prev_node[0]);
			value_final = prev_node[0].getElementsByClassName(class_list[4]);
			console.log("The next element is ",value_final);
			$(value_final).focus();
		}

		if($(event.target).hasClass('desc')){
			console.log("the element on which the up key was pressed is ",event.target);
			class_list = event.target.classList; 
			console.log("The element is present in "+class_list[4]);
			prev_node = $(event.target.parentNode).prev();
			try {
				if ($(prev_node).get(0).tagName == "BR"){
					console.log("The previous node is BR....Skipping it");
					prev_node = $(event.target.parentNode).prev().prev();
				}
			}
			catch(err){
				prev_node = $(event.target.parentNode.parentNode).last();
			}
			console.log("The previous node is ",prev_node[0]);
			value_final = prev_node[0].getElementsByClassName(class_list[4]);
			console.log("The next element is ",value_final);
			$(value_final).focus();
		}
		
		if ($(event.target).hasClass('total')){
			try{
				prev_node = $(event.target.parentNode.parentNode).prev().prev().prev();
				class_list = prev_node[0].classList;			
				console.log("The total element detected the up arrow");
				console.log("The class list of this element is ",event.target.parentNode.parentNode);
				console.log("The previous node is -: ", prev_node[0]);
				console.log("The class list of this element is ",class_list);
				$("div."+class_list[3]+"."+class_list[1]+"."+class_list[2]+".up.first-node > :first-child").focus();
			}
			catch(err){
				$("div.subfamily1"+"."+class_list[1]+"."+class_list[2]+".up.first-node > :first-child").focus();
			}
		}
	}

	if (event.keyCode == 112 || event.keyCode == 113 ){
    	event.preventDefault();
    	class_list = event.target.classList;
    	console.log("The input element has the following class list -: ",class_list);
	family_element = $(".divparent."+class_list[1]+"."+class_list[2]);
	console.log("The family element is -: ",family_element[0]);
	parent_function(family_element[0]);
	return true;
	}
	l = x.parentNode;
	console.log(x);
	element = x;
	e =event;
	x = element;
	e.stopImmediatePropagation();
	console.log(x);
	if (e.keyCode == 114){
		e.preventDefault();
	}
	if (e.keyCode == 114) {
		console.log("f3 key detected inside the sub-child");
		element_family = x.classList[2];
		element_subfamily = x.classList[3];
		console.log("This element belongs to "+element_family+" family");
		console.log("This element belongs to "+element_subfamily+" sub-family");
		if($(x).hasClass('d1')) {
			class_up = '.'+element_subfamily+'.d1'+'.'+element_family+'.up';
			console.log("The number of up divs are ",$(class_up).length);
			console.log("The sub family belongs to division div1");
			console.log('Up division is ',$(class_up)[0]);
//					console.log("The children of the UP division are ",$(class_up)[0].children);
			console.log("The UP div belongs to node-: ",$(class_up)[0].classList[4]);
			next_node = $(class_up).length+1;
			console.log("The next node number is "+next_node);
			if ($(class_up)[0].classList[4] == 'first-node'){
				if ($(class_up)[0].children.length < 3){
					console.log("Creating a new element on the same node");
					html = "<input class = 'child d1 "+element_family+" desc column2' style='width:125px;position:relative; left:10px;' placeholder='Description' list='left'/>"
					$(class_up + '.' + 'first-node').append($(html));
					html = "<input onchange='nodes_total(this)'  class='child d1 "+element_family+" value column2' style='position:relative;left:166px;' type='number' step='any'/>"
					$('.'+element_subfamily+'.d1'+'.'+element_family+'.first-node'+'.'+'down').append($(html));
				}
				else{
					console.log("The first-node is filled");	
					console.log("The number of non-first nodes in this subfamily are "+$('.'+element_subfamily+'.d1'+'.'+element_family+'.up.node').length);
					non_first_node = $('.'+element_subfamily+'.d1'+'.'+element_family+'.up.node').length;
					if (non_first_node == 0){
						html = 
							"<div class='"+element_subfamily+" d1 "+element_family+" up node node"+next_node+"' >" +
								"<input  class ='child d1 " + element_family + " desc column1' style='width:125px;position:relative;left:110px' placeholder='Description' list='left' />"+
							"</div>"+
							"<div class='"+element_subfamily+" d1 "+element_family+" down node node"+next_node+"' >" +
								"<input onchange='nodes_total(this)' style='position:relative;left:110px' class ='child d1 "+element_family+" value column1' type='number' step='any'/>"+
							"</div>"
							console.log($(".subfamily.d1."+element_family+'.'+element_subfamily));
							$(".subfamily.d1."+element_family+'.'+element_subfamily).append($(html));
// start
						element_family_height = $('.divfamily.d1.'+element_family).height();
						console.log("This family existing height is "+ element_family_height);
						sub_family_height = $(".divsubfamily.d1."+element_family).height();
						console.log("Created sub-family existing height is "+ sub_family_height);
					} 
					else{
						var flag = 0;
						nodes = $('.'+element_subfamily+'.d1'+'.'+element_family+'.up.node');
						down_nodes = $('.'+element_subfamily+'.d1'+'.'+element_family+'.down.node');
						console.log("The down nodes are -: ",down_nodes);
						console.log("The non-first nodes are ",nodes);
						for (var i=0;i < non_first_node;i++){
							console.log("The node being checked is ",nodes[i]);
							console.log("The children of the "+i+" node are ",nodes[i].children);
							console.log("The no of children of the "+i+" node are ",nodes[i].children.length);
							if (nodes[i].children.length == 1){
								flag=1;
								var fragment1 = "<input class ='child d1 " + element_family + " desc column2' style='width:125px;position:relative;left:114px' placeholder='Description' list='left' />";
								var fragment2 = "<input onchange = 'nodes_total(this)' class ='child d1 " + element_family + " value column2' style='position:relative;left:166px'  type='number'/>";
								$(nodes[i]).append(fragment1);
								$(down_nodes[i]).append(fragment2);
								break;
							}
						}
						if (flag == 0){
							html = 
							"<div class='"+element_subfamily+" d1 "+element_family+" up node node"+next_node+"' >" +
								"<input   class ='child d1 " + element_family + " desc column1' style='width:125px;position:relative;left:110px;' placeholder='Description' list='left' />"+
							"</div>"+
							"<div class='"+element_subfamily+" d1 "+element_family+" down node node"+next_node+"' >" +
								"<input onchange = 'nodes_total(this)' style='position:relative;left:110px;' class ='child d1 "+element_family+" value column1' type='number' step='any'/>"+
							"</div>"
							console.log($(".subfamily.d1."+element_family+'.'+element_subfamily));
							$(".subfamily.d1."+element_family+'.'+element_subfamily).append($(html));
							element_family_height = $('.divfamily.d1.'+element_family).height();
							console.log("This family existing height is "+ element_family_height);
							sub_family_height = $(".divsubfamily.d1."+element_family).height();
							console.log("Created sub-family existing height is "+ sub_family_height);
						}
					}
				}
			}
		}
		if($(x).hasClass('d2')) {
			class_up = '.'+element_subfamily+'.d2'+'.'+element_family+'.up';
			console.log("The number of up divs are ",$(class_up).length);
			console.log("The sub family belongs to division div2");
			console.log('Up division is ',$(class_up)[0]);
//					console.log("The children of the UP division are ",$(class_up)[0].children);
			console.log("The UP div belongs to node-: ",$(class_up)[0].classList[4]);
			next_node = $(class_up).length+1;
			console.log("The next node number is "+next_node);
			if ($(class_up)[0].classList[4] == 'first-node'){
				if ($(class_up)[0].children.length < 3){
					console.log("Creating a new element on the same node");
					html = "<input class = 'child d2 "+element_family+" desc column2' style='width:125px;position:relative; left:10px;' placeholder='Description' list='right'/>"
					$(class_up + '.' + 'first-node').append($(html));
					html = "<input onchange='nodes_total(this)'  class='child d2 "+element_family+" value column2' style='position:relative;left:166px;' type='number' step='any'/>"
					$('.'+element_subfamily+'.d2'+'.'+element_family+'.first-node'+'.'+'down').append($(html));
				}
				else{
					console.log("The first-node is filled");	
					console.log("The number of non-first nodes in this subfamily are "+$('.'+element_subfamily+'.d2'+'.'+element_family+'.up.node').length);
					non_first_node = $('.'+element_subfamily+'.d2'+'.'+element_family+'.up.node').length;
					if (non_first_node == 0){
						html = 
							"<div class='"+element_subfamily+" d2 "+element_family+" up node node"+next_node+"' >" +
								"<input  class ='child d2 " + element_family + " desc column1' style='width:125px;position:relative;left:110px' placeholder='Description' list='right' />"+
							"</div>"+
							"<div class='"+element_subfamily+" d2 "+element_family+" down node node"+next_node+"' >" +
								"<input onchange='nodes_total(this)' style='position:relative;left:110px' class ='child d2 "+element_family+" value column1' type='number' step='any'/>"+
							"</div>"
							console.log($(".subfamily.d2."+element_family+'.'+element_subfamily));
							$(".subfamily.d2."+element_family+'.'+element_subfamily).append($(html));
// start
						element_family_height = $('.divfamily.d2.'+element_family).height();
						console.log("This family existing height is "+ element_family_height);
						sub_family_height = $(".divsubfamily.d2."+element_family).height();
						console.log("Created sub-family existing height is "+ sub_family_height);
					} 
					else{
						var flag = 0;
						nodes = $('.'+element_subfamily+'.d2'+'.'+element_family+'.up.node');
						down_nodes = $('.'+element_subfamily+'.d2'+'.'+element_family+'.down.node');
						console.log("The down nodes are -: ",down_nodes);
						console.log("The non-first nodes are ",nodes);
						for (var i=0;i < non_first_node;i++){
							console.log("The node being checked is ",nodes[i]);
							console.log("The children of the "+i+" node are ",nodes[i].children);
							console.log("The no of children of the "+i+" node are ",nodes[i].children.length);
							if (nodes[i].children.length == 1){
								flag=1;
								var fragment1 = "<input class ='child d2 " + element_family + " desc column2' style='width:125px;position:relative;left:114px' placeholder='Description' list='right' />";
								var fragment2 = "<input onchange = 'nodes_total(this)' class ='child d2 " + element_family + " value column2' style='position:relative;left:166px'  type='number' />";
								$(nodes[i]).append(fragment1);
								$(down_nodes[i]).append(fragment2);
								break;
							}
						}
						if (flag == 0){
							html = 
							"<div class='"+element_subfamily+" d2 "+element_family+" up node node"+next_node+"' >" +
								"<input   class ='child d2 " + element_family + " desc column1' style='width:125px;position:relative;left:110px;' placeholder='Description' list='right' />"+
							"</div>"+
							"<div class='"+element_subfamily+" d2 "+element_family+" down node node"+next_node+"' >" +
								"<input onchange = 'nodes_total(this)' style='position:relative;left:110px;' class ='child d2 "+element_family+" value column1' type='number' step='any'/>"+
							"</div>"
							console.log($(".subfamily.d2."+element_family+'.'+element_subfamily));
							$(".subfamily.d2."+element_family+'.'+element_subfamily).append($(html));
							element_family_height = $('.divfamily.d2.'+element_family).height();
							console.log("This family existing height is "+ element_family_height);
							sub_family_height = $(".divsubfamily.d2."+element_family).height();
							console.log("Created sub-family existing height is "+ sub_family_height);
						}
					}
				}
			}
		}
	}
}

function parent_function(x){
		event.stopImmediatePropagation();
		console.log("Entered inside the function parent_function on the press of a key.The key code is ",event.keyCode);
		//It will hard to replace all the e's with all the "event" variable hence just leave it as 'e' only
		e = event;
		if (event.ctrlKey){
			console.log("The right arrow key detected at the element",event.target);
			if ($(event.target).hasClass('d1')){
				total_focus_element = "div.subfamily1.d1."+x.classList[2]+".up.first-node > :first-child"
				try{
					$(total_focus_element).focus();
				}
				catch(err){
					console.log("No subfamily exists");
				}
			}
			if ($(event.target).hasClass('d2')){
				total_focus_element = "div.subfamily1.d2."+x.classList[2]+".up.first-node > :first-child"
				try{
					$(total_focus_element).focus();
				}
				catch(err){
					console.log("No subfamily exists");
				}
			}
		}
		if(event.keyCode == 40 ) {
			event.preventDefault();
			console.log("The down arrow key detected in divparent division");
			if ($(event.target).hasClass('d1')){
				try{
					no_family = $('.divparent.d1').length;
					console.log("The no of families in the div1 are -: ",no_family);
					//find out the last family
					last_parent = $('.divparent.d1').eq(no_family - 1 );
					next_family = $(".divfamily.d1."+x.classList[2]).next();
					console.log ("The next family is ", next_family);
					next_parent = "div.divparent.d1."+next_family[0].classList[2];
					console.log("The next parent is ",$(next_parent+" > :first-child"));
					$(next_parent+" > :first-child").focus();
				}
			    catch(err){
			    	$('input.parent.d1.family1.total').focus();
			    }
			}
			if ($(event.target).hasClass('d2')){
				try{
					no_family = $('.divparent.d2').length;
					console.log("The no of families in the div1 are -: ",no_family);
					//find out the last family
					last_parent = $('.divparent.d2').eq(no_family - 1 );
					next_family = $(".divfamily.d2."+x.classList[2]).next();
					console.log ("The next family is ", next_family);
					next_parent = "div.divparent.d2."+next_family[0].classList[2];
					console.log("The next parent is ",$(next_parent+" > :first-child"));
					$(next_parent+" > :first-child").focus();
				}
			    catch(err){
			    	$('input.parent.d2.family2.total').focus();
			    }
			}
		}
		if(event.keyCode == 38 ) {
			event.preventDefault();
			console.log("The up arrow key detected in divparent division");
			if ($(event.target).hasClass('d1')){
				try{
					no_family = $('.divparent.d1').length;
					console.log("The no of families in the div1 are -: ",no_family);
					//find out the last family
					last_parent = $('.divparent.d1').eq(no_family - 1 );
					prev_family = $(".divfamily.d1."+x.classList[2]).prev();
					console.log ("The previous family is ", prev_family);
					prev_parent = "div.divparent.d1."+prev_family[0].classList[2];
					console.log("The next parent is ",$(prev_parent+" > :first-child"));
					$(prev_parent+" > :first-child").focus();
				}
			    catch(err){
			    	$('input.parent.d1.family1.total').focus();
			    }
			}
			if ($(event.target).hasClass('d2')){
				try{
					no_family = $('.divparent.d2').length;
					console.log("The no of families in the div1 are -: ",no_family);
					//find out the last family
					last_parent = $('.divparent.d2').eq(no_family - 1 );
					prev_family = $(".divfamily.d2."+x.classList[2]).prev();
					console.log ("The previous family is ", prev_family);
					prev_parent = "div.divparent.d2."+prev_family[0].classList[2];
					console.log("The next parent is ",$(prev_parent+" > :first-child"));
					$(prev_parent+" > :first-child").focus();
				}
			    catch(err){
			    	$('input.parent.d2.family2.total').focus();
			    }
			}

		}
    	if (e.keyCode == 112 || e.keyCode == 113){
			e.preventDefault();
		}
		console.log(x); //x is the family div in which the parent div is wrapped
		e.stopImmediatePropagation();
		if (e.keyCode == 112){
			console.log("Request For a new Family");
			console.log("Total number of families already present are -: "+$('.divfamily').length);
			next_family = $('.divfamily').length + 1;
			console.log("The next family is -: "+next_family);
			if ($(x).hasClass('d1')){
				console.log("The element id present in div1");
				html ="<div  class = 'divfamily d1 family" +next_family+ " ' style ='width:100%;clear:auto;'>"+
				"<a onclick='delete_function(this)' class='exit family" +next_family+ "' style='position:relative; left:591px;'>"+
				"X"+
				"</a>"+
				"<div class ='divparent d1 family" +next_family+"' onkeydown = 'parent_function(this)'>"+
				"<input onchange='family_total_onchange(this)' class ='parent d1 family" +next_family+ " total'  type='number' step='any'/>"+
				"<input class ='parent d1 family" +next_family+ " desc' list='left'  placeholder='Description' style='width:250px'/>"+
				"</div>"+
				"</div>"
				console.log("The div1 is -: ",$('#div1'));
				$('#div1').append($(html));
			}
			if ($(x).hasClass('d2')){
				console.log("The element id present in div2");
				html ="<div  class = 'divfamily d2 family" +next_family+ " ' style ='width:100%;clear:auto;'>"+
				"<a onclick='delete_function(this)' class='exit family" +next_family+ "' style='position:relative; left:600px;'>"+
				"X"+
				"</a>"+
				"<div class ='divparent d2 family" +next_family+"' onkeydown = 'parent_function(this)'>"+
				"<input onchange='family_total_onchange(this)' class ='parent d2 family" +next_family+ " total'  type='number' step='any'/>"+
				"<input class ='parent d2 family" +next_family+ " desc' list='right'  placeholder='Description' style='width:250px'/>"+
				"</div>"+
				"</div>"
				console.log("The div2 is -: ",$('#div2'));
				$('#div2').append($(html));
			}
		}
		if (e.keyCode==113){
			console.log("Successfully detected a press of f2 key");
			e.stopImmediatePropagation();
			console.log("Class-:" + " " + $(x).attr('class'));
//					col = x.cellIndex;
//					row = x.parentNode.rowIndex;
			if($(x).hasClass('d1')) {
				console.log("Element present in d1");
				element_family = x.classList[2];
				console.log("The element belongs to "+element_family+" family");
				var no_of_family= $('.divfamily').length;
				console.log("Total number of families present are "+no_of_family);
				div_family = x.parentNode;
				console.log("The family div of this element is "+ div_family);
				var no_of_children = $('.divsubfamily.d1'+'.'+element_family);
				if (no_of_children.length == 0){
					console.log("This is families first child");
					html = 
					"<div style='position:relative;left:116px;clear:both;' class='divsubfamily d1 " + element_family + " '>" +
					"<div  onkeydown='child_function(this)'  class='subfamily d1 " + element_family + " subfamily1' >"+
							"<div class='subfamily1 d1 " + element_family + " up first-node' >" +
								"<input onchange='subfamily_total_onchange(this)'  class ='child d1 " + element_family + " total special'  type='number' step='any'/>"+
								"<input  class ='child d1 " + element_family + " desc column1 special'  style='width:125px;position:relative;left:6px' placeholder='Description' list='left' />"+
							"</div>"+
							"<div style='margin-top:0px;' class='subfamily1 d1 "+element_family+" down first-node' >"+
								"<input onchange='nodes_total(this)' style='position:relative; left:110px;' class ='child d1 "+element_family+" value column1 special'  type='number' step='any'/>"+
							"</div>"+
						"</div>"+
					"</div>"
					$(".divparent.d1."+element_family).append($(html));
//
					element_family_height = $('.divfamily.d1.'+element_family).height();
					console.log("This family existing height is "+ element_family_height);
					sub_family_height = $(".divsubfamily.d1."+element_family).height();
					console.log("Created sub-family existing height is "+ sub_family_height);
//
				}
				else {
					console.log("Creating a new subfamily.....");
					class_subfamily = $(".subfamily.d1."+element_family);
					console.log("The no of sub-family are ",class_subfamily.length);
					sub_family = class_subfamily.length + 1
					html = 
						"<div class='line'>--------------------------------------------------------------------------------</div>"+
						"<div onkeydown='child_function(this)' class='subfamily d1 " + element_family + " subfamily"+sub_family+"' >"+
						"<div class='subfamily"+sub_family+" d1 " + element_family + " up first-node' >" +
							"<input onchange='subfamily_total_onchange(this)'  class ='child d1 " + element_family + " total special' type='number' step='any'/>"+
							"<input   class ='child d1 " + element_family + " desc column1 special' style='width:125px;position:relative;left:6px' placeholder='Description' list='left' />"+
						"</div>"+
						"<div class='subfamily"+sub_family+" d1 " + element_family + " down first-node' >" +
							"<input onchange='nodes_total(this)'  style='position:relative; left:110px;' class ='child d1 "+element_family+" value column1 special' type='number' step='any'/>"+
						"</div>"+
					"</div>"+
					console.log("Adding html ",html);
					$(".divsubfamily.d1."+element_family).append($(html));
//
					element_family_height = $('.divfamily.d1.'+element_family).height();
					console.log("This family existing height is "+ element_family_height);
					sub_family_height = $(".divsubfamily.d1."+element_family).height();
					console.log("Created sub-family existing height is "+ sub_family_height);
//
				}
			}
			if($(x).hasClass('d2')) {
				console.log("Element present in d2");
				element_family = x.classList[2];
				console.log("The element belongs to "+element_family+" family");
				var no_of_family= $('.divfamily').length;
				console.log("Total number of families present are "+no_of_family);
				div_family = x.parentNode;
				console.log("The family div of this element is "+ div_family);
				var no_of_children = $('.divsubfamily.d2'+'.'+element_family);
				if (no_of_children.length == 0){
					console.log("This is families first child");
					html = 
					"<div style='position:relative; left:116px;clear:both;' class='divsubfamily d2 " + element_family + " '>" +
					"<div  onkeydown='child_function(this)'  class='subfamily d2 " + element_family + " subfamily1' >"+
							"<div class='subfamily1 d2 " + element_family + " up first-node' >" +
								"<input onchange='subfamily_total_onchange(this)' class ='child d2 " + element_family + " total special' type='number' step='any'/>"+
								"<input   class ='child d2 " + element_family + " desc column1 special' style='width:125px;position:relative;left:6px' placeholder='Description' list='right' />"+
							"</div>"+
							"<div style='margin-top:0px;' class='subfamily1 d2 "+element_family+" down first-node' >"+
								"<input  onchange='nodes_total(this)' style='position:relative; left:110px;' class ='child d2 "+element_family+" value column1 special' type='number' step='any'/>"+
							"</div>"+
						"</div>"+
					"</div>"
					$(".divparent.d2."+element_family).append($(html));
					element_family_height = $('.divfamily.d2.'+element_family).height();
					console.log("This family existing height is "+ element_family_height);
					sub_family_height = $(".divsubfamily.d2."+element_family).height();
					console.log("Created sub-family existing height is "+ sub_family_height);

				}
				else {
					console.log("Creating a new subfamily.....");
					class_subfamily = $(".subfamily.d2."+element_family);
					console.log("The no of sub-family are ",class_subfamily.length);
					sub_family = class_subfamily.length + 1
					html = 
						"<div class='line'>--------------------------------------------------------------------------------</div>"+
						"<div onkeydown='child_function(this)' class='subfamily d2 " + element_family + " subfamily"+sub_family+"' >"+
						"<div class='subfamily"+sub_family+" d2 " + element_family + " up first-node' >" +
							"<input onchange='subfamily_total_onchange(this)'  class ='child d2 " + element_family + " total special' type='number' step='any'/>"+
							"<input   class ='child d2 " + element_family + " desc column1 special' style='width:125px;position:relative;left:6px' placeholder='Description' list='right' />"+
						"</div>"+
						"<div class='subfamily"+sub_family+" d2 " + element_family + " down first-node' >" +
							"<input onchange='nodes_total(this)'  style='position:relative; left:110px;' class ='child d2 "+element_family+" value column1 special' type='number' step='any'/>"+
						"</div>"+
					"</div>"+
					console.log("Adding html ",html);
					$(".divsubfamily.d2."+element_family).append($(html));
					element_family_height = $('.divfamily.d2.'+element_family).height();
					console.log("This family existing height is "+ element_family_height);
					sub_family_height = $(".divsubfamily.d2."+element_family).height();
					console.log("Created sub-family existing height is "+ sub_family_height);
				}
			}
		}
}


$(function (event) {
// keeping count of the families so that the next family can be assigned a unique number
//	family = $('td.parent.total').length;
//	console.log('====================',family);
	$(".exit").on('mouseover',function(e){
//		console.log("=============================== ",$(".family1").height());
//		$(".divfamily").height(200);
		var curElement = document.activeElement;
		e.preventDefault();
		console.log("The element currently is",this);
		// Active element is the once that has cursor present
		$(this).focus();
	});
	
//    $('input').on('keydown', function(e)  {
//    	if ($(this).hasClass('parent')){
//    		if ($(this).hasClass('d1')){
//    			console.log("====================",$('#div1:last'));
//    		}
//    	}
//    	if(event.keyCode == 13) {
//            	console.log("The next input element is ");
//            	console.log("Total Number of families in this div are-: ",$('div.divfamily.d1').length, $('div.divfamily.d1').index());
//    	}
//    });
    
//	$(".parent.desc").keypress(function(){
//		console.log("Key press detected");
//		var cl = $(this).val().length;
//		console.log("The length of the value is "+cl);
//		$(this).attr("size",cl);
//	});
	
});

