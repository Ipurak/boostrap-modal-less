
/*########## ########## ########## ##########   ##########*/
/*########## [START]Lazy To Use Bootstrap Modal ##########*/
/*########## ########## ########## ##########   ##########*/

var BootstrapModal = function() {

  var Modal = {

    main: $("<div>").attr({class:"modal fade",role:"dialog"}),
    dialog: $("<div>").attr("class","modal-dialog"),
    content: $("<div>").attr("class","modal-content"),
    header: $("<div>").attr("class","modal-header"),
    body: $("<div>").attr("class","modal-body"),
    footer: $("<div>").attr("class","modal-footer"),
    open:function(){
      Modal.main.append(Modal.dialog,Modal.content)
      Modal.content.append(Modal.header,Modal.body,Modal.footer)
      Modal.dialog.append(Modal.content)
      $(Modal.main).modal('show')
      
      $(Modal.main).modal('show').promise().done(function(){
        Modal.hidden()
        Modal.shown()
      })
    },
    hide:function(e){
      return e
    },
    show:function(e){
      return e
    },
    hidden:function(hide){
      if (typeof hide == "function"){
        $(Modal.main).on('hidden.bs.modal', function () {
          $(this).data('bs.modal', null).remove()
          Modal.hide(hide())
        })
      }
    },
    shown:function(show){
      if (typeof show == "function"){
        $(Modal.main).on('shown.bs.modal', function () {
          Modal.show(show())
        })
      }
    }
      
  }//end modal


    return Modal
}

/*########## ########## ########## ##########   ##########*/
/*########## [END]Lazy To Use Bootstrap Modal ##########*/
/*########## ########## ########## ##########   ##########*/