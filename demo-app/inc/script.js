function onClickToggleElement() {
    var $el = $(this),
        $showTarget = $($el.data('show')),
        $hideTarget = $($el.data('hide')),
        timeout = $el.data('timeout') || 0;

    setTimeout(
        function toggleHiddenClass() {
            $showTarget.removeClass('hidden');
            $hideTarget.addClass('hidden');
        },
        timeout
    );
}

function displayFirstMessage() {
    $('#message1').removeClass('hidden');
    $('#message2').addClass('hidden');
}

function displaySecondMessage() {
    $('#message1').addClass('hidden');
    $('#message2').removeClass('hidden');
}

function makeBgRed() {
    $(this).css('background-color', 'red');
}

function makeBgBlue() {
    $(this).css('background-color', 'blue');
}

function detectDrop($el) {
    var $dropZone = $($el.data('dropzone')),
        dragOffset = $el.offset(),
        dropOffset = $dropZone.offset(),
        dragTop = dragOffset.top,
        dragRight = (dragOffset.left + $el.outerWidth()),
        dragBottom = (dragOffset.top + $el.outerHeight()),
        dragLeft = dragOffset.left,
        dropTop = dropOffset.top,
        dropRight = (dropOffset.left + $dropZone.outerWidth()),
        dropBottom = (dropOffset.top + $dropZone.outerHeight()),
        dropLeft = dropOffset.left;

    if (
        (
            (dragBottom > dropTop) &&
            (dragTop < dropBottom)
        ) &&
        (
            (dragRight > dropLeft) &&
            (dragLeft < dropRight)
        )
    ) {
        $dropZone.text('Dropped!');
    } else {
        $dropZone.text('Dropzone');
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    $(this).find('.message').removeClass('hidden');
}

function handleDataAction(event) {
    var $target = $($(this).data('target')),
        data = $(this).data('action'),
        action = Object.keys(data)[0],
        val = data[action],
        state = $(this).data('state') ? !$(this).data('state') : true;

    event.preventDefault();

    setTimeout(function delayedHandle() {
        switch (action) {
            case 'select': {
                if (state === true) {
                    $target.val(val).change();
                } else {
                    $target.val('1').change();
                }

                break;
            }

            case 'toggleClass': {
                $target.toggleClass(val);
                break;
            }

            case 'text': {
                if (state) {
                    $target.text(val);
                } else {
                    $target.text('');
                }
                break;
            }

            case 'value': {
                if (state) {
                    $target.val(val);
                } else {
                    $target.val('');
                }
                break;
            }

            case 'create': {
                if (state) {
                    $(val).appendTo($target);
                } else {
                    $target.empty();
                }

                break;
            }

            default: {
                if (state) {
                    $target.prop(action, (val === 'true'));
                } else {
                    $target.prop(action, (val === 'false'));
                }

                break;
            }
        }
    }, 500);

    $(this).data('state', state);
}

function handleMousedown(event) {
    window.dragging = {
        pageX0: event.pageX,
        pageY0: event.pageY,
        elem: this,
        offset0: $(this).offset()
    };

    function handleDragging(event) {
        var left = dragging.offset0.left + (event.pageX - dragging.pageX0),
            top = dragging.offset0.top + (event.pageY - dragging.pageY0);

        $(dragging.elem)
            .offset({
                top: top,
                left: left
            });

        detectDrop($(dragging.elem));
    }

    function handleMouseup(event) {
        $('body')
            .off('mousemove', handleDragging)
            .off('mouseup', handleMouseup);
    }

    $('body')
        .on('mouseup', handleMouseup)
        .on('mousemove', handleDragging);
}

function handleKeydown(event) {
    var $target = $('#testKeyResponse');

    $target.text(event.keyCode);
}

function openAlert(event) {
    event.preventDefault();

    window.alert('I am a alert box!');
}

function openConfirm(event) {
    var $result = $('#confirmResult'),
        result;

    event.preventDefault();

    result = window.confirm('I am a confirm box!');

    $result.text(result);
}

function openPrompt(event) {
    var $result = $('#promptResult'),
        result;

    event.preventDefault();

    result = window.prompt('I am a prompt!');

    $result.text(result);
}

function toggleMoveToElement(event) {
    $(this).toggleClass('moveToClass');
}

$(function () {
    $('.jsToggleElement')
        .on('click', onClickToggleElement);

    $.cookie('test', 'yumyum');

    $('#toggleMessage')
        .on('click', displayFirstMessage)
        .on('dblclick', displaySecondMessage);

    $('#toggleBackground')
        .on('click', makeBgRed)
        .on('dblclick', makeBgBlue);

    $('#draggable')
        .on('mousedown', handleMousedown);

    $('#formSubmitTest')
        .on('submit', handleFormSubmit);

    $('[data-action]')
        .on('click', handleDataAction);

    $('body')
        .on('keydown', handleKeydown);

    $('#openAlert')
        .on('click', openAlert);

    $('#openConfirm')
        .on('click', openConfirm);

    $('#openPrompt')
        .on('click', openPrompt);

    $('#moveTo')
        .on('mouseenter mouseleave', toggleMoveToElement);
});
