$(document).ready(function () {
    $('#generate-btn').click(function () {
      var contentType = $('#content-type').val();
      generateTagline(contentType);
    });

    function generateTagline(contentType) {
      $.ajax({
        url: 'https://api.openai.com/v1/chat/completions',
        headers: {
          'Authorization': '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',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: JSON.stringify({
          'prompt': 'Generate a tagline for ' + contentType + ' content',
          'max_tokens': 20
        }),
        success: function (response) {
          var tagline = response.choices[0].text.trim();
          $('#tagline').val(tagline);
        },
        error: function (xhr, status, error) {
          console.error(error);
        }
      });
    }
  });