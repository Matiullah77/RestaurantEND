
$(document).ready(function () {

  
  const $registrationForm = $("#registrationForm");
  if ($registrationForm.length) {
    const $name = $("#regName");
    const $email = $("#regEmail");
    const $password = $("#regPassword");
    const $confirmPassword = $("#confirmPassword");
    const $message = $("#regMessage");

    function showFeedback($field, message, valid) {
      const $feedback = $field.siblings(".field-feedback");
      $feedback.text(message).removeClass("success error").addClass(valid ? "success" : "error");
      $field.toggleClass("is-valid", valid).toggleClass("is-invalid", !valid);
    }

    function validateName() {
      const valid = $name.val().trim().length >= 2;
      showFeedback($name, valid ? "Name looks good." : "Please enter at least 2 characters.", valid);
      return valid;
    }

    function validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const valid = emailPattern.test($email.val().trim());
      showFeedback($email, valid ? "Email format is correct." : "Please enter a valid email address.", valid);
      return valid;
    }

    function passwordStrength(value) {
      let score = 0;
      if (value.length >= 8) score++;
      if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
      if (/[0-9]/.test(value) || /[^A-Za-z0-9]/.test(value)) score++;
      if (value.length < 1) return "";
      if (score <= 1) return "weak";
      if (score === 2) return "medium";
      return "strong";
    }

    function validatePassword() {
      const strength = passwordStrength($password.val());
      const $meter = $("#passwordMeterFill");
      $meter.removeClass("weak medium strong").addClass(strength);
      $("#passwordStrengthText").text(strength ? "Password strength: " + strength : "Enter a password.");
      const valid = $password.val().length >= 8;
      showFeedback($password, valid ? "Password has at least 8 characters." : "Use at least 8 characters.", valid);
      return valid;
    }

    function validateConfirmPassword() {
      const valid = $confirmPassword.val().length > 0 && $confirmPassword.val() === $password.val();
      showFeedback($confirmPassword, valid ? "Passwords match." : "Passwords do not match.", valid);
      return valid;
    }

    function validateMessage() {
      const valid = $message.val().trim().length >= 5;
      showFeedback($message, valid ? "Thank you for your message." : "Please enter at least 5 characters.", valid);
      return valid;
    }

    $name.on("input", validateName);
    $email.on("input", validateEmail);
    $password.on("input", function () {
      validatePassword();
      if ($confirmPassword.val().length) validateConfirmPassword();
    });
    $confirmPassword.on("input", validateConfirmPassword);
    $message.on("input", validateMessage);

    $registrationForm.on("submit", function (event) {
      event.preventDefault();
      const valid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateMessage();
      if (valid) {
        $("#registrationAlert").removeClass("d-none alert-danger").addClass("alert-success")
          .text("Registration form validated successfully! This student project does not send data to a server.");
        $registrationForm[0].reset();
        $registrationForm.find(".field-feedback").text("").removeClass("success error");
        $registrationForm.find(".form-control").removeClass("is-valid is-invalid");
        $("#passwordMeterFill").removeClass("weak medium strong");
        $("#passwordStrengthText").text("Enter a password.");
      } else {
        $("#registrationAlert").removeClass("d-none alert-success").addClass("alert-danger")
          .text("Please correct the highlighted fields before submitting.");
      }
    });
  }

 
  const $menuTable = $("#menuTable");
  if ($menuTable.length) {
    let activeCategory = "all";
    function filterMenu() {
      const searchText = $("#menuSearch").val().toLowerCase().trim();
      let visibleCount = 0;
      $menuTable.find("tbody tr").each(function () {
        const $row = $(this);
        const rowText = $row.text().toLowerCase();
        const category = String($row.data("category")).toLowerCase();
        const matchesSearch = rowText.indexOf(searchText) !== -1;
        const matchesCategory = activeCategory === "all" || category === activeCategory;
        const show = matchesSearch && matchesCategory;
        $row.toggle(show);
        if (show) visibleCount++;
      });
      $("#noMenuResults").toggleClass("d-none", visibleCount !== 0);
    }

    $("#menuSearch").on("keyup input", filterMenu);
    $(".category-filter").on("click", function () {
      $(".category-filter").removeClass("active");
      $(this).addClass("active");
      activeCategory = $(this).data("category");
      filterMenu();
    });

   
    let nextId = 100;
    function clearMenuForm() {
      $("#menuItemForm")[0].reset();
      $("#editItemId").val("");
      $("#saveMenuItem").text("Add item");
      $("#cancelEdit").addClass("d-none");
    }

    $("#menuItemForm").on("submit", function (event) {
      event.preventDefault();
      const id = $("#editItemId").val();
      const name = $("#itemName").val().trim();
      const description = $("#itemDescription").val().trim();
      const category = $("#itemCategory").val();
      const price = Number($("#itemPrice").val());
      if (!name || !description || !category || !Number.isFinite(price) || price <= 0) {
        alert("Please complete all fields and enter a price greater than zero.");
        return;
      }

      if (id) {
        const $row = $menuTable.find('tr[data-id="' + id + '"]');
        $row.attr("data-category", category).data("category", category);
        $row.find(".item-name").text(name);
        $row.find(".item-description").text(description);
        $row.find(".item-category").text(category.charAt(0).toUpperCase() + category.slice(1));
        $row.find(".item-price").text(price.toLocaleString("en-US"));
      } else {
        const row = `<tr data-id="${nextId}" data-category="${category}">
          <td class="item-name"></td><td class="item-description"></td><td class="item-category"></td>
          <td class="item-price"></td><td class="text-nowrap">
            <button type="button" class="btn btn-sm btn-outline-dark edit-item">Edit</button>
            <button type="button" class="btn btn-sm btn-outline-danger delete-item">Delete</button>
          </td></tr>`;
        const $row = $(row);
        $row.find(".item-name").text(name);
        $row.find(".item-description").text(description);
        $row.find(".item-category").text(category.charAt(0).toUpperCase() + category.slice(1));
        $row.find(".item-price").text(price.toLocaleString("en-US"));
        $menuTable.find("tbody").append($row);
        nextId++;
      }
      clearMenuForm();
      filterMenu();
    });

    $menuTable.on("click", ".edit-item", function () {
      const $row = $(this).closest("tr");
      $("#editItemId").val($row.data("id"));
      $("#itemName").val($row.find(".item-name").text());
      $("#itemDescription").val($row.find(".item-description").text());
      $("#itemCategory").val($row.data("category"));
      $("#itemPrice").val($row.find(".item-price").text().replace(/,/g, ""));
      $("#saveMenuItem").text("Update item");
      $("#cancelEdit").removeClass("d-none");
      $("#menuItemForm")[0].scrollIntoView({ behavior: "smooth", block: "center" });
    });

    $menuTable.on("click", ".delete-item", function () {
      if (confirm("Are you sure you want to delete this menu item?")) {
        $(this).closest("tr").remove();
        filterMenu();
      }
    });
    $("#cancelEdit").on("click", clearMenuForm);
    filterMenu();
  }

  
  const $galleryImages = $(".gallery-image");
  if ($galleryImages.length) {
    let currentImage = 0;
    function showGalleryImage(index) {
      currentImage = (index + $galleryImages.length) % $galleryImages.length;
      const $selected = $galleryImages.eq(currentImage);
      $("#lightboxImage").stop(true, true).fadeOut(150, function () {
        $(this).attr("src", $selected.attr("src")).attr("alt", $selected.attr("alt")).fadeIn(200);
      });
      $("#lightboxCaption").text($selected.closest("figure").find("figcaption").text());
    }
    $galleryImages.on("click", function () {
      currentImage = $galleryImages.index(this);
      showGalleryImage(currentImage);
      bootstrap.Modal.getOrCreateInstance(document.getElementById("galleryLightbox")).show();
    });
    $("#lightboxNext").on("click", function () { showGalleryImage(currentImage + 1); });
    $("#lightboxPrev").on("click", function () { showGalleryImage(currentImage - 1); });
    $(document).on("keydown", function (event) {
      if (!$("#galleryLightbox").hasClass("show")) return;
      if (event.key === "ArrowRight") showGalleryImage(currentImage + 1);
      if (event.key === "ArrowLeft") showGalleryImage(currentImage - 1);
    });
  }
});
