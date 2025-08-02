# from rest_framework import serializers
# from .models import User, Category, Ticket, Comment, Vote
# from django.contrib.auth.password_validation import validate_password
# from django.contrib.auth import authenticate



# # -------------------- USER REGISTER SERIALIZER -------------------- #
# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
#     confirm_password = serializers.CharField(write_only=True, required=True)

#     class Meta:
#         model = User
#         fields = ('username' ,'first_name','last_name', 'email', 'password', 'confirm_password', 'role')

#     def validate(self, attrs):
#         if attrs['password'] != attrs['confirm_password']:
#             raise serializers.ValidationError({"password": "Passwords do not match."})
#         return attrs

#     def create(self, validated_data):
#         validated_data.pop('confirm_password')
#         user = User.objects.create_user(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             first_name=validated_data['first_name'],
#             last_name=validated_data['last_name'],
#             password=validated_data['password'],
#             role=validated_data['role']
#         )
#         return user


# # -------------------- USER SERIALIZER (for Profile etc.) -------------------- #
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'first_name','last_name', 'role']


# # -------------------- CATEGORY SERIALIZER -------------------- #
# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['id', 'name']


# # -------------------- TICKET SERIALIZER -------------------- #
# class TicketSerializer(serializers.ModelSerializer):
#     created_by = UserSerializer(read_only=True)
#     assigned_to = UserSerializer(read_only=True)
#     category = CategorySerializer(read_only=True)

#     class Meta:
#         model = Ticket
#         fields = [
#             'id', 'title', 'description', 'category', 'attachment',
#             'status', 'created_by', 'assigned_to', 'created_at', 'updated_at'
#         ]


# # -------------------- COMMENT SERIALIZER -------------------- #
# class CommentSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)

#     class Meta:
#         model = Comment
#         fields = ['id', 'ticket', 'user', 'content', 'timestamp']


# # -------------------- VOTE SERIALIZER -------------------- #
# class VoteSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Vote
#         fields = ['id', 'ticket', 'vote_type']


# #-------------------- LOGIN SERIALIZER ----------------------#

# # class LoginSerializer(serializers.Serializer):
# #     username = serializers.CharField()
# #     password = serializers.CharField(write_only=True)
# #     role = serializers.CharField()

# #     def validate(self, data):
# #         username = data.get("username")
# #         password = data.get("password")
# #         role = data.get("role")

# #         user = authenticate(username=username, password=password)
# #         if not user:
# #             raise serializers.ValidationError("Invalid username or password.")

# #         if user.role != role:
# #             raise serializers.ValidationError("User role mismatch.")

# #         data["user"] = user
# #         return data


# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True)
#     role = serializers.CharField()

#     def validate(self, data):
#         email = data.get("email")
#         password = data.get("password")
#         role = data.get("role")

#         user = authenticate(request=self.context.get('request'), email=email, password=password)
#         if not user:
#             raise serializers.ValidationError("Invalid email or password.")

#         if user.role != role:
#             raise serializers.ValidationError("User role mismatch.")

#         data["user"] = user
#         return data



from rest_framework import serializers
from .models import User, Category, Ticket, Comment, Vote
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate


# -------------------- USER REGISTER SERIALIZER -------------------- #
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password', 'confirm_password', 'role')

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password'],
            role=validated_data['role']
        )
        return user


# -------------------- USER SERIALIZER -------------------- #
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'role']


# -------------------- CATEGORY SERIALIZER -------------------- #
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


# -------------------- TICKET SERIALIZER -------------------- #
class TicketSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    assigned_to = UserSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Ticket
        fields = [
            'id', 'title', 'description', 'category', 'attachment',
            'status', 'created_by', 'assigned_to', 'created_at', 'updated_at'
        ]


# -------------------- COMMENT SERIALIZER -------------------- #
class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'ticket', 'user', 'content', 'timestamp']


# -------------------- VOTE SERIALIZER -------------------- #
class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['id', 'ticket', 'vote_type']


# -------------------- LOGIN SERIALIZER -------------------- #
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    role = serializers.CharField()

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")
        role = data.get("role")

        user = authenticate(request=self.context.get('request'), email=email, password=password)
        if not user:
            raise serializers.ValidationError("Invalid email or password.")

        if user.role != role:
            raise serializers.ValidationError("User role mismatch.")

        data["user"] = user
        return data
